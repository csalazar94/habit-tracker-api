import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateDailyRecordDto {
  @IsInt()
  habitId: number;

  @IsNotEmpty()
  date: string;
}
