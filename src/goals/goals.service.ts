import { Injectable } from '@nestjs/common';
import { Goal } from '.prisma/client';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { CreateGoalDto } from './dto/create-goal.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GoalsService {
  constructor(private prisma: PrismaService) {}

  async create(createGoalDto: CreateGoalDto): Promise<Goal> {
    const { habitId, frequency, targetValue } = createGoalDto;

    return this.prisma.goal.create({
      data: {
        habit: { connect: { id: habitId } },
        frequency,
        targetValue,
      },
    });
  }

  async findAll(): Promise<Goal[]> {
    return this.prisma.goal.findMany();
  }

  async findOne(id: number): Promise<Goal> {
    return this.prisma.goal.findUnique({ where: { id } });
  }

  async update(id: number, updateGoalDto: UpdateGoalDto): Promise<Goal> {
    const { frequency, targetValue } = updateGoalDto;

    return this.prisma.goal.update({
      where: { id },
      data: { frequency, targetValue },
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.goal.delete({ where: { id } });
  }
}
