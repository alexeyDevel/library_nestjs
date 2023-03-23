import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-cookie';

@Injectable()
export class CookieStrategy extends PassportStrategy(Strategy, 'cookie') {
  constructor() {
    super();
  }

  async validate(request: any, user: any): Promise<any> {
    return user;
  }
}
