import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { DailyRecord } from '@prisma/client';
import { DailyRecordsService } from './daily-records.service';
import { CreateDailyRecordDto } from './dto/create-daily-record.dto';

@Controller('daily-records')
export class DailyRecordsController {
  constructor(private dailyRecordService: DailyRecordsService) {}

  @Post()
  async create(
    @Body() createDailyRecordDto: CreateDailyRecordDto,
  ): Promise<DailyRecord> {
    return this.dailyRecordService.create(createDailyRecordDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<DailyRecord> {
    return this.dailyRecordService.remove(+id);
  }
}
