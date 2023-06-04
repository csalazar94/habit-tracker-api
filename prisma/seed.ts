import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const habitCategories = [
    {
      id: 1,
      name: 'mental-health',
      icon: 'heart',
    },
    {
      id: 2,
      name: 'physical-health',
      icon: 'arm-flex',
    },
    {
      id: 3,
      name: 'education',
      icon: 'school',
    },
    {
      id: 4,
      name: 'finance',
      icon: 'cash',
    },
    {
      id: 5,
      name: 'productivity',
      icon: 'briefcase',
    },
    {
      id: 6,
      name: 'social',
      icon: 'account-group',
    },
    {
      id: 7,
      name: 'art',
      icon: 'palette',
    },
    {
      id: 8,
      name: 'environment',
      icon: 'leaf',
    },
    {
      id: 9,
      name: 'tecnology',
      icon: 'laptop',
    },
    {
      id: 10,
      name: 'spirituality',
      icon: 'hands-pray',
    },
    {
      id: 11,
      name: 'other',
      icon: 'help',
    },
  ];
  await Promise.all(
    habitCategories.map((hc) => prisma.habitCategory.create({ data: hc })),
  );
  await prisma.user.create({
    data: {
      id: 1,
      firstName: 'Camilo',
      lastName: 'Salazar',
      email: 'camilosalazar94@gmail.com',
      password: '123456',
    },
  });
  const habits = [
    {
      id: 1,
      name: 'Read a book',
      frequency: 'weekly',
      target: 3,
      userId: 1,
      habitCategoryId: 3,
    },
    {
      id: 2,
      name: 'Workout',
      frequency: 'weekly',
      target: 5,
      userId: 1,
      habitCategoryId: 2,
    },
  ];
  await Promise.all(
    habits.map((h) =>
      prisma.habit.create({
        data: h,
      }),
    ),
  );
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
