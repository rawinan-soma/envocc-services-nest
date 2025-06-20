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

@UseGuards(JwtAccessGuard, RolesGuard)
@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUsersHandler() {
    return await this.userService.findAllUsers();
  }
}
