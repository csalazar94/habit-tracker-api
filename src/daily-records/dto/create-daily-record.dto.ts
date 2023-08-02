import { IsNotEmpty, Validate, IsUUID } from 'class-validator';
import { IsCustomDateString } from 'src/helpers/validation';

export class CreateDailyRecordDto {
  @IsUUID('all', { message: 'El id del hábito no es válido' })
  habitId: string;

  @IsNotEmpty({ message: 'La fecha no puede ser vacia' })
  @Validate(IsCustomDateString)
  date: string;
}
