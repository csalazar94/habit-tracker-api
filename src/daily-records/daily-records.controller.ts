import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DailyRecord } from '@prisma/client';
import { DailyRecordsService } from './daily-records.service';
import { CreateDailyRecordDto } from './dto/create-daily-record.dto';
import { UpdateDailyRecordDto } from './dto/update-daily-record.dto';

@Controller('daily-records')
export class DailyRecordsController {
  constructor(private dailyRecordService: DailyRecordsService) {}

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<DailyRecord> {
    return this.dailyRecordService.findOne(id);
  }

  @Get()
  async findAll(): Promise<DailyRecord[]> {
    return this.dailyRecordService.findAll();
  }

  @Post()
  async create(
    @Body() createDailyRecordDto: CreateDailyRecordDto,
  ): Promise<DailyRecord> {
    return this.dailyRecordService.create(createDailyRecordDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDailyRecordDto: UpdateDailyRecordDto,
  ): Promise<DailyRecord> {
    return this.dailyRecordService.update(id, updateDailyRecordDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.dailyRecordService.remove(id);
  }
}

