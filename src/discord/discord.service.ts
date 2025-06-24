import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DiscordService {
  private readonly logger = new Logger(DiscordService.name);
  // private readonly URL =
  // 'https://discordapp.com/api/webhooks/1386949197068111952/btOpDPj9W5fna-8hdmV9UBevn4GbYlyxzUuerAwJi66UYQfnewgOUs2asX81eGbuWara';
  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {}

  // async sendMessage(content: string) {
  //   const body = { content };

  //   try {
  //     await firstValueFrom(this.http.post(this.URL, body));
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  async sendTicketToDiscord(content: string) {
    const ticketUrl = this.config.get('TICKET_URL');

    const body = { content };
    try {
      await firstValueFrom(this.http.post(ticketUrl, body));
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('something went wrong');
    }
  }
}
