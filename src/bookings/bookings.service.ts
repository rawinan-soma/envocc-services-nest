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
import generator from 'generate-password-ts';
import { toZonedTime } from 'date-fns-tz';

@Injectable()
export class BookingsService {
  private readonly logger = new Logger(BookingsService.name);
  constructor(private readonly prisma: PrismaService) {}
  async getAllBookings() {
    try {
      const bookings = await this.prisma.room_booking.findMany();

      // bookings[0].start_datetime = toZonedTime(
      //   bookings[0].start_datetime,
      //   'Asia/Bangkok',
      // );
      // bookings[0].end_datetime = toZonedTime(
      //   bookings[0].end_datetime,
      //   'Asia/Bangkok',
      // );

      // bookings[0].start_datetime = format(
      //   bookings[0].start_datetime,
      //   'yyyy-MM-dd HH:mm:ssXX',
      //   { timeZone: 'Asia/Bangkok' },
      // );
      return bookings;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('something went wrong');
    }
  }

  async getBookingById(bookingId: string) {
    try {
      const booking = await this.prisma.room_booking.findUniqueOrThrow({
        where: { id: bookingId },
      });

      return booking;
    } catch (error) {
      this.logger.error(error);
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
      // date create
      const startDateTime = toZonedTime(
        new Date(
          `${dto.start_date.toISOString().split('T')[0]}T${dto.start_time}`,
        ),
        'Asia/Bangkok',
      );

      const endDateTime = toZonedTime(
        new Date(`${dto.end_date.toISOString().split('T')[0]}T${dto.end_time}`),
        'Asia/Bangkok',
      );

      if (startDateTime >= endDateTime) {
        throw new BadRequestException('end time must be after the start time');
      }

      // check room available
      const isReserved = await this.prisma.room_booking.findFirst({
        where: {
          roomId: dto.roomId,
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
      // If hasConference = true => Create Transaction 2 table

      if (dto.hasConference && dto.conference_request) {
        const meeting_password = generator.generate({
          length: 6,
          uppercase: false,
          numbers: true,
        });
        const booking = await this.prisma.room_booking.create({
          data: {
            userId: dto.userId,
            roomId: dto.roomId,
            attendees: dto.attendees,
            meeting_title: dto.meeting_title,
            need_equipment: dto.need_equipment,
            notes: dto.notes,
            end_datetime: endDateTime,
            start_datetime: startDateTime,
            conference: {
              create: {
                userId: dto.userId,
                meeting_password: meeting_password,
                meeting_title: dto.conference_request.meeting_title,
                start_datetime: startDateTime,
                end_datetime: endDateTime,
                equipment: dto.conference_request.equipment,
              },
            },
          },
          select: {
            start_datetime: true,
            end_datetime: true,
            meeting_title: true,
            room: {
              select: {
                name: true,
              },
            },
            user: {
              select: { thai_f_name: true, thai_l_name: true },
            },
            conference: true,
          },
        });
        return booking;
      }
      // If not create only booking
      const booking = await this.prisma.room_booking.create({
        data: {
          userId: dto.userId,
          roomId: dto.roomId,
          meeting_title: dto.meeting_title,
          attendees: dto.attendees,
          start_datetime: startDateTime,
          end_datetime: endDateTime,
          need_equipment: dto.need_equipment,
          notes: dto.notes,
        },
        select: {
          start_datetime: true,
          end_datetime: true,
          meeting_title: true,
          room: {
            select: {
              name: true,
            },
          },
          user: {
            select: { thai_f_name: true, thai_l_name: true },
          },
          conference: true,
        },
      });
      return booking;
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

  async getAllBookingByUser(userId: number) {
    try {
      const bookings = await this.prisma.room_booking.findMany({
        where: { userId: userId },
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
        throw new InternalServerErrorException(
          'something went wrong',
          String(error),
        );
      }
    }
  }

  async updateBooking(updated: UpdateBookingDto, bookingId: UUID) {
    try {
      const currentBooking = await this.getBookingById(bookingId);
      if (!currentBooking) {
        throw new BadRequestException('booking did not exists');
      }

      const { start_date, start_time, end_date, end_time, ...rest } = updated;

      if (end_date && start_date && start_time && end_time) {
        const startDateTime = new Date(
          `${start_date?.toISOString().split('T')[0]}T${start_time}`,
        );

        const endDateTime = new Date(
          `${end_date?.toISOString().split('T')[0]}T${end_time}`,
        );

        if (startDateTime >= endDateTime) {
          throw new BadRequestException(
            'end time must be after the start time',
          );
        }

        const isReserved = await this.prisma.room_booking.findFirst({
          where: {
            roomId: currentBooking.roomId,
            AND: [
              { start_datetime: { lt: endDateTime } },
              { end_datetime: { gt: startDateTime } },
            ],
          },
        });

        if (isReserved) {
          throw new BadRequestException(
            'room is not available in this date/time',
          );
        }

        return await this.prisma.room_booking.update({
          where: { id: bookingId },
          data: {
            end_datetime: endDateTime,
            start_datetime: startDateTime,
            ...rest,
          },
        });
      } else {
        return await this.prisma.room_booking.update({
          where: { id: bookingId },
          data: rest,
        });
      }
    } catch (error) {
      this.logger.error(error);
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException(
          'something went wrong',
          String(error),
        );
      }
    }
  }

  async deleteBooking(bookingId: UUID) {
    try {
      const currentBooking = await this.prisma.room_booking.findUnique({
        where: { id: bookingId },
      });

      if (!currentBooking) {
        throw new BadRequestException('booking did not exist');
      }

      return await this.prisma.room_booking.delete({
        where: { id: bookingId },
      });
    } catch (error) {
      this.logger.error(error);
      if (error instanceof BadRequestException) {
        throw error;
      }

      if (
        error instanceof PrismaClientKnownRequestError ||
        error instanceof PrismaClientUnknownRequestError
      ) {
        throw new BadRequestException(error);
      }

      throw new InternalServerErrorException(
        'something went wrong',
        String(error),
      );
    }
  }
}
