import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';

@Injectable()
export class RemindersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateReminderDto) {
    const { habitId, ...rest } = data;
    const habit = await this.prisma.habit.findUnique({
      where: { id: habitId },
    });
    if (!habit) {
      throw new Error(`Habit with id ${habitId} not found.`);
    }
    return this.prisma.reminder.create({
      data: {
        ...rest,
        habit: { connect: { id: habitId } },
      },
    });
  }

  async findAll() {
    return this.prisma.reminder.findMany();
  }

  async findOne(id: number) {
    const reminder = await this.prisma.reminder.findUnique({
      where: { id },
      include: { habit: true },
    });
    if (!reminder) {
      throw new Error(`Reminder with id ${id} not found.`);
    }
    return reminder;
  }

  async update(id: number, data: UpdateReminderDto) {
    const { habitId, ...rest } = data;
    const habit = await this.prisma.habit.findUnique({
      where: { id: habitId },
    });
    if (!habit) {
      throw new Error(`Habit with id ${habitId} not found.`);
    }
    return this.prisma.reminder.update({
      where: { id },
      data: {
        ...rest,
        habit: { connect: { id: habitId } },
      },
    });
  }

  async remove(id: number) {
    return this.prisma.reminder.delete({ where: { id } });
  }
}

