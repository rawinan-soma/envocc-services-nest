import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  UseGuards,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking-dto';
import { RequestWithUser } from 'src/auth/request-with-user.interface';
import { JwtAccessGuard } from 'src/auth/jwt-access.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { UUID } from 'crypto';
import { UpdateBookingDto } from './dto/update-booking-dto';

@UseGuards(JwtAccessGuard, RolesGuard)
@Controller('bookings')
export class BookingsController {
  constructor(private readonly service: BookingsService) {}

  @Post()
  async reservedMeetingRoomHandler(@Body() room: CreateBookingDto) {
    return await this.service.createBooking(room);
  }

  @Get('me')
  async getAllBookingsByUserHandler(@Req() req: RequestWithUser) {
    const userId = req.user.id;
    return await this.service.findAllBookingByUser(userId);
  }

  @Get()
  async getAllBookingsHandler() {
    return await this.service.findAllBookings();
  }

  @Get(':id')
  async getBookingByIdHandler(@Param('id') id: UUID) {
    return await this.service.findBookingById(id);
  }

  @Patch(':id')
  async updateBookingHandler(
    @Param('id') id: UUID,
    @Body() dto: UpdateBookingDto,
  ) {
    return await this.service.updateBooking(dto, id);
  }

  @Delete(':id')
  async deleteBookingHandler(@Param('id') id: UUID) {
    return await this.service.deleteBooking(id);
  }
}
