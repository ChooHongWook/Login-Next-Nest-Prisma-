import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWT_AUTH_GUARD_TYPE } from 'src/const';

@Injectable()
export class AccessTokenGuard extends AuthGuard(JWT_AUTH_GUARD_TYPE) {}
