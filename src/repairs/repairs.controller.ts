import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { RepairsService } from './repairs.service';
import { UUID } from 'crypto';
import { RequestWithUser } from 'src/auth/request-with-user.interface';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { DiscordService } from 'src/discord/discord.service';

@Controller('repairs')
export class RepairsController {
  constructor(
    private readonly repairService: RepairsService,
    private readonly discordService: DiscordService,
  ) {}

  @Get(':id')
  async getTicketByIdHandler(@Param('id') id: UUID) {
    return await this.repairService.getTicketById(id);
  }

  @Get('me')
  async getTicketByUserHandler(@Req() request: RequestWithUser) {
    const user = request.user;
    return await this.repairService.getTicketByUser(user.id);
  }

  @Post()
  async createTicketHandler(@Body() dto: CreateTicketDto) {
    const ticket = await this.repairService.createTicket(dto);

    const content = `🚨!! **แจ้งซ่อม** !!🚨\n
    ชื่อผู้แจ้ง: ${ticket.user.thai_f_name} ${ticket.user.thai_l_name}
    กลุ่ม: ${ticket.user.group.name}
    อุปกรณ์: ${ticket.device}
    ปัญหาที่พบ: ${ticket.problem}
    รายละเอียด: ${ticket.description ? ticket.description : 'ไม่รู้'}
    `;

    await this.discordService.sendTicketToDiscord(content);
  }
}
