import { Exclude } from 'class-transformer';

export class CreateUserDto {
  username: string;
  password: string;
  email: string;
  prefix: string;
  thai_f_name: string;
  thai_l_name: string;
  eng_f_name: string;
  eng_l_name: string;
  phone: string;
  line_id: string;
  group: number;
  position: number;
  position_level: number;
  avatar_id: string;

  @Exclude()
  hashedRefreshToken: string;
}
