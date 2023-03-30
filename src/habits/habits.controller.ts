import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { Habit } from '@prisma/client';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { HabitsService } from './habits.service';

@Controller('habits')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Habit> {
    return this.habitsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHabitDto: UpdateHabitDto,
  ): Promise<Habit> {
    return this.habitsService.update(+id, updateHabitDto);
  }
}
