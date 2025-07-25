import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptionsWithRequest } from 'passport-jwt';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { TokenPayload } from './tokenPayload.interface';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private readonly config: ConfigService,
    private readonly service: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          return req?.cookies?.Refresh as string;
        },
      ]),
      secretOrKey: config.get('JWT_REFRESH_TOKEN_SECRET'),
      passReqToCallback: true,
    } as StrategyOptionsWithRequest);
  }

  async validate(req: Request, payload: TokenPayload) {
    const refreshToken = req.cookies?.Refresh as string;
    return this.service.getUserFromRefreshToken(refreshToken, payload.userId);
  }
}
