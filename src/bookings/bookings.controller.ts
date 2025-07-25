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
import { DiscordService } from 'src/discord/discord.service';

@UseGuards(JwtAccessGuard, RolesGuard)
@Controller('bookings')
export class BookingsController {
  constructor(
    private readonly bookingService: BookingsService,
    private readonly discordService: DiscordService,
  ) {}

  @Post()
  async reservedMeetingRoomHandler(@Body() room: CreateBookingDto) {
    const booking = await this.bookingService.createBooking(room);

    if (booking.conference) {
      const content = `\nแจ้งใช้ห้องประชุม\n
ชื่อผู้แจ้ง: ${booking.user.thai_f_name} ${booking.user.thai_l_name}
ห้องประชุม: ${booking.room.name}
เรื่อง: ${booking.meeting_title}
วันที่จอง :${booking.start_datetime.toLocaleDateString()}
เวลาที่จอง: ${booking.start_datetime.toLocaleTimeString('th-Th', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Bangkok' })} ถึง ${booking.end_datetime.toLocaleTimeString('th-Th', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Bangkok' })}
ระบบ Conference: ใช้
Conference password: ${booking.conference.meeting_password}\n`;

      await this.discordService.sendTicketToDiscord(content);
    }

    return booking;
  }

  @Get('me')
  async getAllBookingsByUserHandler(@Req() req: RequestWithUser) {
    const userId = req.user.id;
    return await this.bookingService.getAllBookingByUser(userId);
  }

  @Get()
  async getAllBookingsHandler() {
    return await this.bookingService.getAllBookings();
  }

  @Get(':id')
  async getBookingByIdHandler(@Param('id') id: UUID) {
    return await this.bookingService.getBookingById(id);
  }

  @Patch(':id')
  async updateBookingHandler(
    @Param('id') id: UUID,
    @Body() dto: UpdateBookingDto,
  ) {
    return await this.bookingService.updateBooking(dto, id);
  }

  @Delete(':id')
  async deleteBookingHandler(@Param('id') id: UUID) {
    return await this.bookingService.deleteBooking(id);
  }
}
