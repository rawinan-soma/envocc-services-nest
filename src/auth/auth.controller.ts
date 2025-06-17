import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { RequestWithUser } from './request-with-user.interface';
import { LocalAuthenGuard } from './local-authen.guard';
import JwtRefreshGuard from './jwt-refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('register')
  async createUserHandler(@Body() user: CreateUserDto) {
    return await this.service.createUser(user);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenGuard)
  @Post('login')
  async loginHandler(@Req() req: RequestWithUser) {
    const { user } = req;
    const accessTokenCookie = this.service.getCookieWithAccessToken(user.id);
    const refreshTokenCookie = this.service.getCookieFromRefreshToken(user.id);

    await this.service.setCurrentRefreshToken(
      refreshTokenCookie.token,
      user.id,
    );

    req.res?.setHeader('Set-Cookie', [
      accessTokenCookie,
      refreshTokenCookie.cookie,
    ]);

    return {
      msg: 'login successful',
      username: user.username,
      id: user.id,
      role: user.role,
    };
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  async refresh(@Req() req: RequestWithUser) {
    const accessTokenCookie = this.service.getCookieWithAccessToken(
      req.user.id,
    );

    // const refreshTokenCookie = this.service.getCookieFromRefreshToken(
    //   req.user.id,
    // );

    // await this.service.setCurrentRefreshToken(
    //   refreshTokenCookie.token,
    //   req.user.id,
    // );

    req.res?.setHeader('Set-Cookie', accessTokenCookie);
    return { msg: 'token refresh' };
  }

  @Post('logout')
  async logoutHandler(@Req() req: RequestWithUser) {
    await this.service.removeRefreshToken(req.user.id);
    req.res?.setHeader('Set-Cookie', this.service.getLogoutCookie());
    return { msg: 'logout successful' };
  }
}
