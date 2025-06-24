import { Module } from '@nestjs/common';
import { RepairsService } from './repairs.service';
import { RepairsController } from './repairs.controller';
import { PrismaService } from 'prisma/prisma.service';
import { DiscordService } from 'src/discord/discord.service';
import { DiscordModule } from 'src/discord/discord.module';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [RepairsService],
  exports: [RepairsController, RepairsService],
})
export class RepairsModule {}
