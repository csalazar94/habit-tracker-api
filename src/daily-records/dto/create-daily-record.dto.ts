import { Type } from 'class-transformer';
import { IsDate, IsInt } from 'class-validator';

export class CreateDailyRecordDto {
  @IsInt()
  habitId: number;

  @IsDate()
  @Type(() => Date)
  date: Date;
}
