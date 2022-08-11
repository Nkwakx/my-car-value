import { SerializeInterceptor } from './../interceptors/serialize.interceptor';
import { CreateUserDto } from './dtos/create-user.dto';
import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, UseInterceptors, ClassSerializerInterceptor  } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserDto } from './../users/dtos/user.dto';


@Controller('auth')
export class UsersController {

     constructor(private usersService: UsersService){}

     @Post('/signup')
     createUser(@Body() body: CreateUserDto) {
         this.usersService.create(body.email, body.password);
     }

     // @UseInterceptors(ClassSerializerInterceptor)
     @UseInterceptors(new SerializeInterceptor(UserDto))
     @Get('/:id')
     async findUser(@Param('id') id: string){
          console.log('handler is running');
          const user = await this.usersService.findOne(parseInt(id));
          if(!user){
               throw new NotFoundException('User not found');
          }
          return user;
     }

     @Get()
     findAllUsers(@Query('email') email: string){
          return this.usersService.find(email);
     }

     
     @Delete('/:id')
     removeUser(@Param('id') id: string){
          return this.usersService.remove(parseInt(id));
     }

     @Patch('/:id')
     updateUser(@Param('id') id: string, @Body() body: UpdateUserDto){
          return this.usersService.update(parseInt(id), body);
     }

}
