import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HabitsModule } from './habits/habits.module';
import { HabitCategoriesModule } from './habit-categories/habit-categories.module';
import { DailyRecordsModule } from './daily-records/daily-records.module';
import { DelayMiddleware } from './middlewares/delay.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';
import dayjsConfiguration from './config/dayjs';
import appConfiguration from './config/app';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dayjsConfiguration, appConfiguration],
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    HabitsModule,
    HabitCategoriesModule,
    DailyRecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private configService: ConfigService) {}
  private readonly logger = new Logger(AppModule.name);

  configure(consumer: MiddlewareConsumer) {
    if (this.configService.get('app.delayEnabled')) {
      this.logger.log('Delay enabled');
      consumer.apply(DelayMiddleware).forRoutes('*');
    }
  }
}
