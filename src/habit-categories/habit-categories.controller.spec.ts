import { Test, TestingModule } from '@nestjs/testing';
import { HabitCategoriesController } from './habit-categories.controller';
import { HabitCategoriesService } from './habit-categories.service';

describe('HabitCategoriesController', () => {
  let controller: HabitCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabitCategoriesController],
      providers: [HabitCategoriesService],
    }).compile();

    controller = module.get<HabitCategoriesController>(HabitCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
