import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreatePaymentDto } from './dto/createPayment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post()
  createPayment(
    @Body() createPaymentDto: CreatePaymentDto,
  ): Observable<CreatePaymentDto> {
    return this.natsClient.emit('create_payment', createPaymentDto);
  }
}
