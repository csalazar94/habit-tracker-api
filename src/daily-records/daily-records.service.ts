import { Injectable } from '@nestjs/common';
import { DailyRecord } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDailyRecordDto } from './dto/create-daily-record.dto';
import { UpdateDailyRecordDto } from './dto/update-daily-record.dto';

@Injectable()
export class DailyRecordsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createDailyRecordDto: CreateDailyRecordDto,
  ): Promise<DailyRecord> {
    return this.prisma.dailyRecord.create({
      data: {
        date: createDailyRecordDto.date,
        habit: {
          connect: {
            id: createDailyRecordDto.habitId,
          },
        },
      },
    });
  }

  async findAll(): Promise<DailyRecord[]> {
    return this.prisma.dailyRecord.findMany();
  }

  async findOne(id: number): Promise<DailyRecord> {
    return this.prisma.dailyRecord.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateDailyRecordDto: UpdateDailyRecordDto,
  ): Promise<DailyRecord> {
    return this.prisma.dailyRecord.update({
      where: {
        id,
      },
      data: {
        date: updateDailyRecordDto.date,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.dailyRecord.delete({
      where: {
        id,
      },
    });
  }
}

