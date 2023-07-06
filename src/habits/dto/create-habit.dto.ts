import { IsEnum, IsInt, IsNotEmpty, IsPositive, IsUUID } from 'class-validator';

export class CreateHabitWithoutUserIdDto {
  @IsUUID()
  habitCategoryId: string;

  @IsNotEmpty()
  name: string;

  @IsEnum(['weekly', 'monthly', 'yearly'])
  frequency: string;

  @IsPositive()
  @IsInt()
  target: number;
}

export class CreateHabitDto extends CreateHabitWithoutUserIdDto {
  @IsUUID()
  userId: string;
}
