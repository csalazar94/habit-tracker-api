import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HabitsModule } from './habits/habits.module';
import { HabitCategoriesModule } from './habit-categories/habit-categories.module';
import { GoalsModule } from './goals/goals.module';
import { RemindersModule } from './reminders/reminders.module';
import { DailyRecordsModule } from './daily-records/daily-records.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    HabitsModule,
    HabitCategoriesModule,
    GoalsModule,
    RemindersModule,
    DailyRecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
