import { Module } from '@nestjs/common';
import { DailyRecordsService } from './daily-records.service';
import { DailyRecordsController } from './daily-records.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DailyRecordsController],
  providers: [DailyRecordsService],
  imports: [PrismaModule],
})
export class DailyRecordsModule {}
