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

      const isReserved = this.prisma.room_booking.findFirst({
        where: { start_datetime: startDateTime },
      });

      if (!isReserved) {
        throw new BadRequestException(
          'room is not available at selected date/time',
        );
      }

      return await this.prisma.room_booking.create({
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
      });
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
}
