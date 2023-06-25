import { OmitType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsDate, IsIn, IsInt, IsOptional, Max } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends OmitType(CreateUserDto, [
  'email',
  'password',
]) {
  @IsOptional()
  @IsIn(['male', 'female', 'other'], { message: 'El género no es válido' })
  gender: string;

  @IsOptional()
  @IsDate({ message: 'La fecha de nacimiento no es válida' })
  @Type(() => Date)
  dob: Date;

  @IsOptional()
  @Max(700, { message: 'El peso no puede ser mayor a $constraint1' })
  @IsInt()
  weight: number;

  @IsOptional()
  @Max(300, { message: 'La altura no puede ser mayor a $constraint1' })
  @IsInt()
  height: number;
}
