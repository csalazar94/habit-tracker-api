import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  HabitsService,
  HabitWithCategoryAndRecords,
} from 'src/habits/habits.service';
import { CreateHabitDto } from 'src/habits/dto/create-habit.dto';
import { FilterHabitsDto } from 'src/habits/dto/filter-habit.dto';
import { DailyRecord, Habit, User } from '@prisma/client';
import * as dayjs from 'dayjs';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly habitsService: HabitsService,
  ) {}
  FREQUENCY_DICT = {
    weekly: 'week',
    monthly: 'month',
    yearly: 'year',
  };

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(+id, updateUserDto);
  }

  @Get(':id/habits')
  async findAllHabitsByUserId(
    @Param('id') id: string,
    @Query() filterHabitsDto: FilterHabitsDto,
  ) {
    const habits = await this.habitsService.findAllByUserId(
      +id,
      filterHabitsDto,
    );
    return habits.map((habit) => {
      const count: number = habit.dailyRecords.filter((record) =>
        dayjs(record.date).isSame(
          dayjs(),
          this.FREQUENCY_DICT[habit.frequency],
        ),
      ).length;
      return {
        ...habit,
        progress: count / habit.target || 0,
      };
    });
  }

  @Post(':id/habits')
  async createHabit(
    @Param('id') id: string,
    @Body() createHabitDto: CreateHabitDto,
  ) {
    const habit = await this.habitsService.create({
      ...createHabitDto,
      userId: +id,
    });
    const count: number = habit.dailyRecords.filter((record: DailyRecord) =>
      dayjs(record.date).isSame(dayjs(), this.FREQUENCY_DICT[habit.frequency]),
    ).length;
    return {
      ...habit,
      progress: count / habit.target || 0,
    };
  }
}
