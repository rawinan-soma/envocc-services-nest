import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(private readonly prisma: PrismaService) {}
  async getAllUsers() {
    try {
      const users = await this.prisma.user.findMany({
        omit: { password: true },
      });
      return users;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('something went wrong');
    }
  }

  async getCurrentUser(userId: number) {
    try {
      const user = await this.prisma.user.findFirst({
        where: { id: userId },
      });

      return user;
    } catch (error) {
      this.logger.error(error);
      if (error instanceof PrismaClientKnownRequestError)
    }
  }
}
