// Core dependencies
import { Controller, Logger, Post, Body, Request, UsePipes, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

// Internal dependencies
import { UserService } from '../../common/services/user.service';
import { CreateUserInput, GenericUserClass } from '../../common/dto/user.dto';
import { SecurePasswordPipe } from '../../common/pipes/secure-password.pipe';
import { LoginUserInput, LoginUserOutput } from '../../common/dto/auth.dto';
import { ValidateLoginPipe } from '../../common/pipes/validate-login.pipe';
import { User } from '../../entities/User.entity';
import { AuthService } from '../../common/auth/auth.service';
import { UserAuthGuard } from '../../common/guards/auth.guard';

@ApiTags('Auth')
@Controller()
export class PublicController {
  private readonly logger = new Logger(PublicController.name);

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Post('/auth/signup')
  @UsePipes(SecurePasswordPipe)
  async signUp(@Body() newUserInfo: CreateUserInput): Promise<GenericUserClass> {
    return await this.userService.createUser(newUserInfo);
  }

  @Post('/auth/login')
  @UsePipes(ValidateLoginPipe)
  async signIn(@Body() loginInfo: LoginUserInput): Promise<LoginUserOutput> {
    const user: User = await this.userService.fetchUserByEmail({ email: loginInfo.email })
    return await this.authService.login(user)
  }

  @Post('/auth/logout')
  @ApiBearerAuth()
  @UseGuards(UserAuthGuard)
  async signOut(@Request() req): Promise<void> {
    await this.authService.logout(req.user)
  }
}
