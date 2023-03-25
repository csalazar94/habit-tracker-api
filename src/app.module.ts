import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HabitsModule } from './habits/habits.module';
import { HabitCategoriesModule } from './habit-categories/habit-categories.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, HabitsModule, HabitCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
