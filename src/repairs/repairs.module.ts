import { Module } from '@nestjs/common';
import { RepairsService } from './repairs.service';
import { RepairsController } from './repairs.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [],
  providers: [RepairsService, PrismaService],
  exports: [RepairsController, RepairsService],
})
export class RepairsModule {}
