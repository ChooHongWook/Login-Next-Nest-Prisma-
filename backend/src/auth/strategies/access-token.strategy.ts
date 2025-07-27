import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWT_AUTH_GUARD_TYPE } from 'const';
import { JwtPayload } from 'src/types/express';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
  Strategy,
  JWT_AUTH_GUARD_TYPE,
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.AUTH_SECRET!,
    });
  }

  validate(payload: JwtPayload) {
    return payload;
  }
}
