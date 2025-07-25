import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAccessGuard } from 'src/auth/jwt-access.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/common/roles.decorator';
import { RequestWithUser } from 'src/auth/request-with-user.interface';

@UseGuards(JwtAccessGuard, RolesGuard)
@Controller("users")
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUsersHandler() {
    return await this.userService.getAllUsers();
  }

  @Get("me")
  async getCurrentUserHandler(@Req() req: RequestWithUser) {
    return 
  }
}
