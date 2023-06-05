import { Injectable } from '@nestjs/common';
import { DailyRecord } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDailyRecordDto } from './dto/create-daily-record.dto';

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

  async remove(id: number): Promise<DailyRecord> {
    return this.prisma.dailyRecord.delete({
      where: {
        id,
      },
    });
  }
}

