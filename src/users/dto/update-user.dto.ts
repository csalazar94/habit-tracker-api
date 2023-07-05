import { OmitType } from '@nestjs/mapped-types';
import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Max,
  Validate,
} from 'class-validator';
import { IsCustomDateString } from 'src/helpers/validation';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends OmitType(CreateUserDto, [
  'email',
  'password',
]) {
  @IsOptional()
  @IsIn(['male', 'female', 'other'], { message: 'El género no es válido' })
  gender: string;

  @IsOptional()
  @IsNotEmpty({ message: 'La fecha de nacimiento no puede ser vacia' })
  @Validate(IsCustomDateString)
  dob: string;

  @IsOptional()
  @Max(700, { message: 'El peso no puede ser mayor a $constraint1' })
  @IsInt()
  weight: number;

  @IsOptional()
  @Max(300, { message: 'La altura no puede ser mayor a $constraint1' })
  @IsInt()
  height: number;
}
