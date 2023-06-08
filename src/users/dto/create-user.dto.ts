import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @MaxLength(30, {
    message: 'El nombre no puede tener más de $constraint1 caracteres',
  })
  @IsNotEmpty({ message: 'El nombre es requerido' })
  firstName: string;

  @MaxLength(30, {
    message: 'El apellido no puede tener más de $constraint1 caracteres',
  })
  @IsNotEmpty({ message: 'El apellido es requerido' })
  lastName: string;

  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  email: string;

  @IsStrongPassword(
    {},
    { message: 'La contraseña no es lo suficientemente fuerte' },
  )
  password: string;
}
