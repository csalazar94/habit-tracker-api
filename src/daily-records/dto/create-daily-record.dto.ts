import { IsInt, IsNotEmpty, Validate } from 'class-validator';
import { IsCustomDateString } from 'src/helpers/validation';

export class CreateDailyRecordDto {
  @IsInt()
  habitId: number;

  @IsNotEmpty()
  @Validate(IsCustomDateString)
  date: string;
}
