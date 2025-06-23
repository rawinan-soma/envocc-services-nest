import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'prisma/prisma.service';
import { BookingsController } from 'src/bookings/bookings.controller';
import { BookingsService } from 'src/bookings/bookings.service';
import { RepairsController } from 'src/repairs/repairs.controller';
import { RepairsService } from 'src/repairs/repairs.service';

@Module({
  controllers: [UsersController, BookingsController, RepairsController],
  providers: [UsersService, PrismaService, BookingsService, RepairsService],
})
export class UsersModule {}
