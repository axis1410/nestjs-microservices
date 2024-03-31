import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsNotEmpty()
  @IsPositive()
  amount: number;
}
