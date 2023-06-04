import { Injectable } from '@nestjs/common';
import { Habit, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { FilterHabitsDto } from './dto/filter-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

const habitsWithCategoryAndRecords = Prisma.validator<Prisma.HabitArgs>()({
  include: {
    habitCategory: { select: { name: true } },
    dailyRecords: { select: { date: true } },
  },
});
type HabitsWithCategoryAndRecords = Prisma.HabitGetPayload<
  typeof habitsWithCategoryAndRecords
>;

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
  ): Promise<HabitsWithCategoryAndRecords[]> {
    return this.prisma.habit.findMany({
      where: {
        userId,
        habitCategoryId: filterHabitsDto.habitCategoryId,
        name: { contains: filterHabitsDto.name },
      },
      include: {
        habitCategory: { select: { name: true, icon: true } },
        dailyRecords: { select: { date: true } },
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
