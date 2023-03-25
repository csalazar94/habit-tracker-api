import { Module } from '@nestjs/common';
import { HabitCategoriesService } from './habit-categories.service';
import { HabitCategoriesController } from './habit-categories.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HabitsModule } from 'src/habits/habits.module';

@Module({
  controllers: [HabitCategoriesController],
  providers: [HabitCategoriesService],
  imports: [PrismaModule, HabitsModule],
})
export class HabitCategoriesModule {}
