import { Controller, Post, Body } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking-dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly service: BookingsService) {}

  @Post()
  async reservedMeetingRoomHandler(@Body() room: CreateBookingDto) {
    const booking = this.service.createBooking(room);
    return { msg: 'booking success', booking_data: booking };
  }
}
