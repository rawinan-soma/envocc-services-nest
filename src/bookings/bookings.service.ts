import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from '@prisma/client/runtime/library';
import { CreateBookingDto } from './dto/create-booking-dto';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateBookingDto } from './dto/update-booking-dto';
import { UUID } from 'crypto';

@Injectable()
export class BookingsService {
  private readonly logger = new Logger(BookingsService.name);
  constructor(private readonly prisma: PrismaService) {}
  async findAllBookings() {
    try {
      const bookings = await this.prisma.room_booking.findMany();
      return bookings;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('something went wrong');
    }
  }

  async findBookingById(bookingId: string) {
    try {
      const booking = await this.prisma.room_booking.findUniqueOrThrow({
        where: { id: bookingId },
      });

      return booking;
    } catch (error) {
      if (error instanceof PrismaClientUnknownRequestError) {
        throw new BadRequestException(error);
      } else if (error instanceof NotFoundException) {
        throw error;
      } else if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('record not found');
      } else {
        this.logger.error(error);
        throw new InternalServerErrorException('something went wrong');
      }
    }
  }

  async createBooking(dto: CreateBookingDto) {
    try {
      const startDateTime = new Date(
        `${dto.start_date.toISOString().split('T')[0]}T${dto.start_time}`,
      );

      const endDateTime = new Date(
        `${dto.end_date.toISOString().split('T')[0]}T${dto.end_time}`,
      );

      if (startDateTime >= endDateTime) {
        throw new BadRequestException('end time must be after the start time');
      }

      const isReserved = await this.prisma.room_booking.findFirst({
        where: {
          room: dto.room,
          AND: [
            { start_datetime: { lt: endDateTime } },
            { end_datetime: { gt: startDateTime } },
          ],
        },
      });

      if (isReserved) {
        throw new BadRequestException(
          'room is not available at selected date/time',
        );
      }

      const result = await this.prisma.room_booking.create({
        data: {
          user: dto.user,
          room: dto.room,
          attendees: dto.attendees,
          meeting_title: dto.meeting_title,
          need_equipment: dto.need_equipment,
          notes: dto.notes,
          end_datetime: endDateTime,
          start_datetime: startDateTime,
        },
        select: { id: true, meeting_title: true },
      });
      return result;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else if (
        error instanceof PrismaClientKnownRequestError ||
        error instanceof PrismaClientUnknownRequestError
      ) {
        throw new BadRequestException(error);
      } else {
        this.logger.error(error);
        throw new InternalServerErrorException('something went wrong');
      }
    }
  }

  async findAllBookingByUser(userId: number) {
    try {
      const bookings = await this.prisma.room_booking.findMany({
        where: { user: userId },
      });
      return bookings;
    } catch (error) {
      this.logger.error(error);
      if (
        error instanceof PrismaClientKnownRequestError ||
        error instanceof PrismaClientUnknownRequestError
      ) {
        throw new BadRequestException(error);
      } else {
        throw new InternalServerErrorException('something went wrong', error);
      }
    }
  }

  async updateBooking(updated: UpdateBookingDto, bookingId: UUID) {
    try {
      const currentBooking = await this.findBookingById(bookingId);
      if (!currentBooking) {
        throw new BadRequestException('booking did not exists');
      }

      if (
        !updated.start_date ||
        !updated.end_date ||
        !updated.start_time ||
        !updated.end_time
      ) {
      }

      const startDateTime = new Date(
        `${updated.start_date?.toISOString().split('T')[0]}T${updated?.start_time}`,
      );

      const endDateTime = new Date(
        `${updated.end_date?.toISOString().split('T')[0]}T${updated?.end_time}`,
      );

      if (startDateTime >= endDateTime) {
        throw new BadRequestException('end time must be after the start time');
      }

      const isReserved = await this.prisma.room_booking.findFirst({
        where: {
          room: currentBooking.room,
          AND: [
            { start_datetime: { lt: endDateTime } },
            { end_datetime: { gt: startDateTime } },
          ],
        },
      });

      // return await this.prisma.room_booking.update();
    } catch (error) {}
  }
}
