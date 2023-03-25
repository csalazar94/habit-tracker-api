import { Controller, Get } from '@nestjs/common';
import { HabitCategoriesService } from './habit-categories.service';

@Controller('habit-categories')
export class HabitCategoriesController {
  constructor(
    private readonly habitCategoriesService: HabitCategoriesService,
  ) {}

  @Get()
  findAll() {
    return this.habitCategoriesService.findAll();
  }
}
