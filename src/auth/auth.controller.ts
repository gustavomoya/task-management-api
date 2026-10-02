import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard.js';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}  
  
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() request: any) {
    return this.authService.login(request.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/logout')
  async logout(@Request() req: any) {
    return req.logout();
  }
}

