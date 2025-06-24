import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateTicketDto } from './dto/create-ticket-dto';
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from '@prisma/client/runtime/library';
import { UUID } from 'crypto';

@Injectable()
export class RepairsService {
  private readonly logger = new Logger(RepairsService.name);
  constructor(private readonly prisma: PrismaService) {}

  async createTicket(ticket: CreateTicketDto) {
    try {
      return await this.prisma.repair_req.create({
        data: ticket,
        select: {
          create_at: true,
          problem: true,
          device: true,
          description: true,
          user: {
            select: {
              thai_f_name: true,
              thai_l_name: true,
              group: { select: { name: true } },
            },
          },
        },
      });
    } catch (error) {
      this.logger.error(error);

      if (
        error instanceof PrismaClientKnownRequestError ||
        error instanceof PrismaClientUnknownRequestError
      ) {
        throw new BadRequestException(error);
      }

      throw new InternalServerErrorException('something went wrong', error);
    }
  }

  async getTicketByUser(user: number) {
    try {
      return await this.prisma.repair_req.findMany({ where: { userId: user } });
    } catch (error) {
      this.logger.error(error);
      if (
        error instanceof PrismaClientKnownRequestError ||
        error instanceof PrismaClientUnknownRequestError
      ) {
        throw new BadRequestException(error);
      }

      throw new InternalServerErrorException('something went wrong', error);
    }
  }

  async getTicketById(ticketId: UUID) {
    try {
      const ticket = this.prisma.repair_req.findUnique({
        where: { ticketId: ticketId },
      });

      if (!ticket) {
        throw new NotFoundException('record not found');
      }

      return ticket;
    } catch (error) {
      this.logger.error(error);

      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new InternalServerErrorException('something went wrong', error);
    }
  }
}
