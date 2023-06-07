import { Controller, Get } from '@nestjs/common';
import { HabitCategory } from '@prisma/client';
import { HabitCategoriesService } from './habit-categories.service';

@Controller('habit-categories')
export class HabitCategoriesController {
  constructor(
    private readonly habitCategoriesService: HabitCategoriesService,
  ) {}

  @Get('')
  async findAll(): Promise<HabitCategory[]> {
    return this.habitCategoriesService.findAll();
  }
}
