import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking-dto';
import { RequestWithUser } from 'src/auth/request-with-user.interface';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly service: BookingsService) {}

  @Post()
  async reservedMeetingRoomHandler(@Body() room: CreateBookingDto) {
    const booking = this.service.createBooking(room);
    return { msg: 'booking success', booking_data: booking };
  }

  @Get('/me')
  async getAllBookingsByUserHandler(@Req() req: RequestWithUser) {
    const userId = req.user.id;
    return await this.service.findAllBookingByUser(userId);
  }

  @Get()
  async getAllBookingsHandler() {
    return await this.service.findAllBookings();
  }
}
