import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments.controller';

@Module({
  controllers: [PaymentsMicroserviceController],
})
export class PaymentsModule {}
