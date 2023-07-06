import { PrismaClient } from '@prisma/client';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const prisma = new PrismaClient();

async function main() {
  const habitCategories = [
    {
      name: 'Salud física',
      icon: 'arm-flex',
    },
    {
      name: 'Salud mental',
      icon: 'brain',
    },
    {
      name: 'Educación',
      icon: 'school',
    },
    {
      name: 'Finanzas',
      icon: 'cash',
    },
    {
      name: 'Productividad',
      icon: 'briefcase',
    },
    {
      name: 'Social',
      icon: 'account-group',
    },
    {
      name: 'Arte y creatividad',
      icon: 'palette',
    },
    {
      name: 'Medio ambiente',
      icon: 'leaf',
    },
    {
      name: 'Tecnología',
      icon: 'laptop',
    },
    {
      name: 'Espiritualidad',
      icon: 'hands-pray',
    },
    {
      name: 'Otro',
      icon: 'help',
    },
  ];
  await prisma.habitCategory.createMany({
    data: habitCategories,
  });
  const createdHabitCategories = await prisma.habitCategory.findMany();
  const createdUser = await prisma.user.create({
    data: {
      firstName: 'Camilo',
      lastName: 'Salazar',
      email: 'camilosalazar94@gmail.com',
      password: '123456',
    },
  });
  const habits = [
    {
      name: 'Read a book',
      frequency: 'weekly',
      target: 3,
      userId: createdUser.id,
      habitCategoryId: createdHabitCategories[2].id,
    },
    {
      name: 'Workout',
      frequency: 'weekly',
      target: 5,
      userId: createdUser.id,
      habitCategoryId: createdHabitCategories[0].id,
    },
  ];
  await prisma.habit.createMany({ data: habits });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
