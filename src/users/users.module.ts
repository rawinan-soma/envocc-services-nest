import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'prisma/prisma.service';
import { BookingsService } from 'src/bookings/bookings.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, BookingsService],
})
export class UsersModule {}
