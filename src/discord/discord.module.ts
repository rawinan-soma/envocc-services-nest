import { Module } from '@nestjs/common';
import { DiscordService } from './discord.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [],
  providers: [DiscordService],
  controllers: [],
  exports: [DiscordService],
})
export class DiscordModule {}
