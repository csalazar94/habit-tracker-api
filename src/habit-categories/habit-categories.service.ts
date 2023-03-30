import { Injectable } from '@nestjs/common';
import { HabitCategory } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HabitCategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<HabitCategory[]> {
    return this.prisma.habitCategory.findMany();
  }
}
