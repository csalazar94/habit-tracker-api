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
import { HabitsService } from 'src/habits/habits.service';
import { CreateHabitDto } from 'src/habits/dto/create-habit.dto';
import { FilterHabitsDto } from 'src/habits/dto/filter-habit.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly habitsService: HabitsService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Get(':id/habits')
  findAllHabitsByUserId(
    @Param('id') id: string,
    @Query() filterHabitsDto: FilterHabitsDto,
  ) {
    return this.habitsService.findAllByUserId(+id, filterHabitsDto);
  }

  @Post(':id/habits')
  createHabit(@Param('id') id: string, @Body() createHabitDto: CreateHabitDto) {
    return this.habitsService.create({ ...createHabitDto, userId: +id });
  }
}
