import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';

@Module({
  controllers: [],
  providers: [BookingsService],
  exports: [BookingsController, BookingsService],
})
export class BookingsModule {}
