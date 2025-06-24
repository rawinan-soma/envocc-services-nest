import { Module } from '@nestjs/common';
import { ConferenceService } from './conference.service';
import { ConferenceController } from './conference.controller';

@Module({
  controllers: [],
  providers: [ConferenceService],
})
export class ConferenceModule {}
