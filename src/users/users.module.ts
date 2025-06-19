import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'prisma/prisma.service';
import { BookingsController } from 'src/bookings/bookings.controller';
import { BookingsModule } from 'src/bookings/bookings.module';
import { BookingsService } from 'src/bookings/bookings.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAccessGuard } from 'src/auth/jwt-access.guard';
import { RolesGuard } from 'src/auth/roles.guard';

@Module({
  controllers: [UsersController, BookingsController],
  providers: [UsersService, PrismaService, BookingsService],
})
export class UsersModule {}
