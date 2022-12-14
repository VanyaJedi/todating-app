import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard, JwtAuthGuard, AuthService } from '../auth';

@Controller()
export class AppController {

  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);  
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}