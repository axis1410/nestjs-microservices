import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UsersMicroserviceController {
  @MessagePattern({ cmd: 'create_user' })
  createUser(@Payload() data: CreateUserDto) {
    console.log(data);
    return { msg: 'Ok' };
  }
}
