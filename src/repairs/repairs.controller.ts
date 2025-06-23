import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { RepairsService } from './repairs.service';
import { UUID } from 'crypto';
import { RequestWithUser } from 'src/auth/request-with-user.interface';
import { CreateTicketDto } from './dto/create-ticket-dto';

@Controller('repairs')
export class RepairsController {
  constructor(private readonly service: RepairsService) {}

  @Get(':id')
  async getTicketByIdHandler(@Param('id') id: UUID) {
    return await this.service.getTicketById(id);
  }

  @Get('me')
  async getTicketByUserHandler(@Req() request: RequestWithUser) {
    const user = request.user;
    return await this.service.getTicketByUser(user.id);
  }

  @Post()
  async createTicketHandler(@Body() ticket: CreateTicketDto) {
    return await this.service.createTicket(ticket);
  }
}
