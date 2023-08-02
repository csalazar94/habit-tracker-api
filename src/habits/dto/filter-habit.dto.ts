import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class FilterHabitsDto {
  @IsOptional()
  @IsUUID('all', { message: 'El id del usuario no es válido' })
  habitCategoryId: string;

  @IsOptional()
  @IsNotEmpty({ message: 'El nombre no puede ser vacio' })
  name: string;
}
