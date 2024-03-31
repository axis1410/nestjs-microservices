import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dto/createPayment.dto';

@Controller('payments')
export class PaymentsMicroserviceController {
  constructor() {}

  @EventPattern('create_payment')
  createPayment(@Payload() data: CreatePaymentDto) {
    console.log(data);
  }
}
