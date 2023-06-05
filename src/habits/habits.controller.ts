import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { DailyRecord, Habit } from '@prisma/client';
import * as dayjs from 'dayjs';
import { constants } from 'src/constants';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { HabitsService } from './habits.service';

@Controller('habits')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const habit = await this.habitsService.findOne(+id);
    const count: number = habit.dailyRecords.filter((record: DailyRecord) =>
      dayjs(record.date).isSame(
        dayjs(),
        constants.frequencies[habit.frequency],
      ),
    ).length;
    return {
      ...habit,
      progress: count / habit.target || 0,
    };
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHabitDto: UpdateHabitDto,
  ): Promise<Habit> {
    return this.habitsService.update(+id, updateHabitDto);
  }
}
