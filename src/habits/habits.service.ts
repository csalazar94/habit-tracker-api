import { Injectable } from '@nestjs/common';
import { Habit, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { FilterHabitsDto } from './dto/filter-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

const habitWithCategoryAndRecords = Prisma.validator<Prisma.HabitArgs>()({
  include: {
    habitCategory: { select: { name: true, icon: true } },
    dailyRecords: { select: { id: true, date: true } },
  },
});
export type HabitWithCategoryAndRecords = Prisma.HabitGetPayload<
  typeof habitWithCategoryAndRecords
>;

@Injectable()
export class HabitsService {
  constructor(private prisma: PrismaService) {}

  create(createHabitDto: CreateHabitDto): Promise<HabitWithCategoryAndRecords> {
    return this.prisma.habit.create({
      data: createHabitDto,
      include: {
        habitCategory: { select: { name: true, icon: true } },
        dailyRecords: { select: { id: true, date: true } },
      },
    });
  }

  findOne(id: number): Promise<HabitWithCategoryAndRecords> {
    return this.prisma.habit.findUnique({
      where: { id },
      include: {
        habitCategory: { select: { name: true, icon: true } },
        dailyRecords: { select: { id: true, date: true } },
      },
    });
  }

  findAllByUserId(
    userId: number,
    filterHabitsDto: FilterHabitsDto,
  ): Promise<HabitWithCategoryAndRecords[]> {
    return this.prisma.habit.findMany({
      where: {
        userId,
        habitCategoryId: filterHabitsDto.habitCategoryId,
        name: { contains: filterHabitsDto.name },
      },
      include: {
        habitCategory: { select: { name: true, icon: true } },
        dailyRecords: { select: { id: true, date: true } },
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
