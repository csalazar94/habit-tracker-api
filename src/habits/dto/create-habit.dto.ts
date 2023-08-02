import { OmitType } from '@nestjs/mapped-types';
import { IsEnum, IsInt, IsNotEmpty, IsPositive, IsUUID } from 'class-validator';

export class CreateHabitDto {
  @IsUUID('all', { message: 'El id del usuario no es válido' })
  userId: string;

  @IsUUID('all', { message: 'El id de la categoría no es válido' })
  habitCategoryId: string;

  @IsNotEmpty({ message: 'El nombre es requerido' })
  name: string;

  @IsEnum(['weekly', 'monthly', 'yearly'], {
    message: 'La frecuencia no es válida',
  })
  frequency: string;

  @IsPositive({ message: 'El objetivo debe ser mayor a 0' })
  @IsInt({ message: 'El objetivo debe ser un número entero' })
  target: number;
}

export class CreateHabitWithoutUserIdDto extends OmitType(CreateHabitDto, [
  'userId',
]) {}
