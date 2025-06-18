import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BookingsService } from 'src/bookings/bookings.service';
import { CreateBookingDto } from 'src/bookings/dto/create-booking-dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly bookingService: BookingsService,
  ) {}

  @Get()
  async getAllUsersHandler() {
    return await this.userService.findAllUsers();
  }

  @Post('room-bookings')
  async reservedMeetingRoomHandler(@Body() room: CreateBookingDto) {
    const booking = this.bookingService.createBooking(room);
    return { msg: 'booking success', booking_data: booking };
  }
}
