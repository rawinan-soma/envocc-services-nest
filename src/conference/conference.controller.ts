import { Controller } from '@nestjs/common';
import { ConferenceService } from './conference.service';

@Controller('conference')
export class ConferenceController {
  constructor(private readonly conferenceService: ConferenceService) {}
}
