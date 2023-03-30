import { Injectable } from '@nestjs/common';
import { Habit } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { FilterHabitsDto } from './dto/filter-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Injectable()
export class HabitsService {
  constructor(private prisma: PrismaService) {}

  create(createHabitDto: CreateHabitDto): Promise<Habit> {
    return this.prisma.habit.create({ data: createHabitDto });
  }

  findOne(id: number): Promise<Habit> {
    return this.prisma.habit.findUnique({ where: { id } });
  }

  findAllByUserId(
    userId: number,
    filterHabitsDto: FilterHabitsDto,
  ): Promise<Habit[]> {
    return this.prisma.habit.findMany({
      where: {
        userId,
        habitCategoryId: filterHabitsDto.habitCategoryId,
        name: { contains: filterHabitsDto.name },
        description: { contains: filterHabitsDto.description },
      },
    });
  }

  update(id: number, updateHabitDto: UpdateHabitDto): Promise<Habit> {
    return this.prisma.habit.update({
      where: { id },
      data: updateHabitDto,
    });
  }
}
