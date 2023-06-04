export class CreateHabitDto {
  userId: number;
  habitCategoryId: number;
  name: string;
  description: string;
  frequency: string;
  target: number;
  unit: string;
}
