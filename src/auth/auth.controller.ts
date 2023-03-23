import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('/token')
  getToken(@Body() id: string, email: string, firstName: string): string {
    return this.authService.createToken({
      id,
      email,
      firstName,
    });
  }
}
