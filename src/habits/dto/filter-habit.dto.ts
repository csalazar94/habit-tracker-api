import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class FilterHabitsDto {
  @IsOptional()
  @IsUUID()
  habitCategoryId?: string;

  @IsOptional()
  @IsNotEmpty()
  name?: string;
}
