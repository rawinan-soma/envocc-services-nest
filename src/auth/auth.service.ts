import {
  BadGatewayException,
  BadRequestException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from '@prisma/client/runtime/library';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './tokenPayload.interface';
import * as cookie from 'cookie';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly jwt: JwtService,
  ) {}
  async createUser(dto: CreateUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(dto.password, 10);
      return await this.prisma.user.create({
        data: { ...dto, password: hashedPassword },
        select: { username: true, role: true },
      });
    } catch (error) {
      this.logger.error(error);
      if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('username or email alredy exists');
          default:
            throw new BadGatewayException('create user failed', error);
        }
      } else {
        this.logger.error(error);
        throw new InternalServerErrorException('something went wrong');
      }
    }
  }

  public async getAuthenticatedUser(username: string, password: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: { username: username },
        select: { password: true, username: true, id: true },
      });

      user === null || user === undefined
        ? new UnauthorizedException('invalid credential')
        : user;

      await this.verifypassword(password, user?.password || '');
      user?.password ? undefined : undefined;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientUnknownRequestError) {
        throw new InternalServerErrorException('something went wrong', error);
      } else if (error instanceof UnauthorizedException) {
        throw error;
      } else {
        this.logger.error(error);
        throw new InternalServerErrorException('something went wrong');
      }
    }
  }

  private async verifypassword(password: string, hashedPassword: string) {
    const isPasswordMatched = await bcrypt.compare(password, hashedPassword);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('invalid credential');
    }
  }

  public getCookieWithAccessToken(user_id: number) {
    const payload: TokenPayload = { userId: user_id };
    const token = this.jwt.sign(payload, {
      secret: this.config.get('JWT_ACCESS_TOKEN_SECRET'),
      expiresIn: `${this.config.get('JWT_ACCESS_TOKEN_EXP_TIME')}s`,
    });

    return cookie.serialize('Authentication', token, {
      httpOnly: true,
      path: '/',
      maxAge: Number(this.config.get('JWT_ACCESS_TOKEN_EXP_TIME')),
      sameSite: 'lax',
      secure: false,
    });
  }

  public getCookieFromRefreshToken(user_id: number) {
    const payload: TokenPayload = { userId: user_id };
    const token = this.jwt.sign(payload, {
      secret: this.config.get('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn: `${this.config.get('JWT_REFRESH_TOKEN_EXP_TIME')}s`,
    });

    return {
      cookie: cookie.serialize('Authentication', token, {
        httpOnly: true,
        path: '/',
        maxAge: Number(this.config.get('JWT_ACCESS_TOKEN_EXP_TIME')),
        sameSite: 'lax',
        secure: false,
      }),
      token,
    };
  }

  async setCurrentRefreshToken(refreshToken: string, user_id: number) {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.prisma.user.update({
      where: { id: user_id },
      data: { hashedRefreshToken: hashedRefreshToken },
    });
  }

  async getUserFromRefreshToken(refreshToken: string, userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    const isRefreshTokenMatch = await bcrypt.compare(
      refreshToken,
      user?.hashedRefreshToken ?? '',
    );

    if (isRefreshTokenMatch) {
      return { id: user?.id, username: user?.username, role: user?.role };
    }
  }

  public getLogoutCookie() {
    return [
      `Authentication=; HttpOnly; Path=/; Max-Age=0`,
      `Refresh=; HttpOnly; Path=/; Max-Age=0`,
    ];
  }

  async removeRefreshToken(userId: number) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { hashedRefreshToken: null },
    });
  }
}
