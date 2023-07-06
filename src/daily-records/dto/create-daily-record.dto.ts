import { IsNotEmpty, Validate, IsUUID } from 'class-validator';
import { IsCustomDateString } from 'src/helpers/validation';

export class CreateDailyRecordDto {
  @IsUUID()
  habitId: string;

  @IsNotEmpty()
  @Validate(IsCustomDateString)
  date: string;
}
