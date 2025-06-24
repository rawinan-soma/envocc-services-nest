import { Type } from 'class-transformer';

export class CreateConferenceDto {
  bookingId?: String;
  meeting_title: String;
  meeting_password?: String;

  @Type(() => Date)
  start_date: Date;

  @Type(() => Date)
  end_date: Date;

  start_time: String;

  end_time: String;

  userId: String;

  equipment: String;
}
