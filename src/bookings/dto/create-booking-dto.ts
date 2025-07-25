import { Type } from 'class-transformer';
import { Matches } from 'class-validator';
import { CreateConferenceDto } from 'src/conference/dto/create-conference-dto';

export class CreateBookingDto {
  userId: number;
  roomId: number;
  meeting_title: string;
  attendees: number;

  @Type(() => Date)
  start_date: Date;

  @Type(() => Date)
  end_date: Date;

  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
  start_time: string;

  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
  end_time: string;

  need_equipment: boolean;

  notes?: string;

  hasConference: boolean;

  conference_request?: CreateConferenceDto;
}
