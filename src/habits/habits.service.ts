import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Injectable()
export class HabitsService {
  constructor(private prisma: PrismaService) {}

  create(createHabitDto: CreateHabitDto) {
    return this.prisma.habit.create({ data: createHabitDto });
  }

  findOne(id: number) {
    return this.prisma.habit.findUnique({ where: { id } });
  }

  findAllByUserId(userId: number) {
    return this.prisma.habit.findMany({ where: { userId } });
  }

  update(id: number, updateHabitDto: UpdateHabitDto) {
    return this.prisma.habit.update({
      where: { id },
      data: updateHabitDto,
    });
  }
}
