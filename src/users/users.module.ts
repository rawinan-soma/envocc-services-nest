import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'prisma/prisma.service';
import { BookingsController } from 'src/bookings/bookings.controller';
import { BookingsService } from 'src/bookings/bookings.service';
import { RepairsController } from 'src/repairs/repairs.controller';
import { RepairsService } from 'src/repairs/repairs.service';
import { DiscordService } from 'src/discord/discord.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RepairsModule } from 'src/repairs/repairs.module';
import { DiscordModule } from 'src/discord/discord.module';

@Module({
  imports: [HttpModule],
  controllers: [UsersController, BookingsController, RepairsController],
  providers: [
    UsersService,
    PrismaService,
    BookingsService,
    RepairsService,
    DiscordService,
    ConfigService,
  ],
})
export class UsersModule {}
