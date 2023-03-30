import { Test, TestingModule } from '@nestjs/testing';
import { DailyRecordsController } from './daily-records.controller';
import { DailyRecordsService } from './daily-records.service';

describe('DailyRecordsController', () => {
  let controller: DailyRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyRecordsController],
      providers: [DailyRecordsService],
    }).compile();

    controller = module.get<DailyRecordsController>(DailyRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
