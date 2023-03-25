import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { Reminder } from '@prisma/client';

@Controller('reminders')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Get()
  findAll(): Promise<Reminder[]> {
    return this.remindersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Reminder> {
    return this.remindersService.findOne(+id);
  }

  @Post()
  create(@Body() createReminderDto: CreateReminderDto): Promise<Reminder> {
    return this.remindersService.create(createReminderDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateReminderDto: UpdateReminderDto,
  ): Promise<Reminder> {
    return this.remindersService.update(+id, updateReminderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<Reminder> {
    return this.remindersService.remove(+id);
  }
}

