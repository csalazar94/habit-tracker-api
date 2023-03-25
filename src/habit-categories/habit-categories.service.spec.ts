import { Test, TestingModule } from '@nestjs/testing';
import { HabitCategoriesService } from './habit-categories.service';

describe('HabitCategoriesService', () => {
  let service: HabitCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabitCategoriesService],
    }).compile();

    service = module.get<HabitCategoriesService>(HabitCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
