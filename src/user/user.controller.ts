import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }
  
  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Put('updateByEmail')
  async updateUserByEmail(
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    const { email } = updateUserDto;
    if (!email) {
      throw new Error('Email is required for updating user');
    }
    return this.userService.updateUserByEmail(email, updateUserDto);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const user = await this.userService.validateUser(email, password);
    if (user) {
      return { message: 'Login successful', user };
    } else {
      throw new Error('Credenciais inválidas');
    }
  }
}
