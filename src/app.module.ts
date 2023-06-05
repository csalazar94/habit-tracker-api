import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HabitsModule } from './habits/habits.module';
import { HabitCategoriesModule } from './habit-categories/habit-categories.module';
import { RemindersModule } from './reminders/reminders.module';
import { DailyRecordsModule } from './daily-records/daily-records.module';
import { DelayMiddleware } from './middlewares/delay.middleware';
import { ConfigModule } from '@nestjs/config';
import dayjsConfiguration from './config/dayjs';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dayjsConfiguration],
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    HabitsModule,
    HabitCategoriesModule,
    RemindersModule,
    DailyRecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DelayMiddleware).forRoutes('*');
  }
}
