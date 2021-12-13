import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getAsignaturas().map((a) => {
      return db.asignatura.create({ data: a });
    })
  );
}

seed();

function getAsignaturas() {
  return [
    {
      denominacion: 'Lenguajes de marcas y sistemas de gestión de información',
      alias: `LMAR`,
      curso: 1,
      horas: 128,
    },
    {
      denominacion: 'Sistemas informáticos',
      alias: `SI`,
      curso: 1,
      horas: 192,
    },
    {
      denominacion: 'Bases de datos',
      alias: `BBDD`,
      curso: 1,
      horas: 192,
    },
    {
      denominacion: 'Programación',
      alias: `PROG`,
      curso: 1,
      horas: 256,
    },
    {
      denominacion: 'Entornos de desarrollo',
      alias: `ED`,
      curso: 1,
      horas: 96,
    },
    {
      denominacion: 'Formación y orientación laboral',
      alias: `FOL`,
      curso: 1,
      horas: 96,
    },
  ];
}
