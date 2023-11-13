// seeder is used to fill data to database (that was filled with dummy datas) automatically

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const students = [
  {
    name: "Alhaitam",
    vision: "Dendro",
    darshanId: 1,
  },
  {
    name: "Wanderer",
    vision: "Anemo",
    darshanId: 5,
  },
];

const darshans = [
  {
    id: 1,
    name: "Amurta",
    speciality: "Biology",
  },
  {
    id: 2,
    name: "Rtawahist",
    speciality: "Illuminationism",
  },
  {
    id: 3,
    name: "Spantamad",
    speciality: "Elementalism",
  },
  {
    id: 4,
    name: "Haravatat",
    speciality: "Semiotics",
  },
  {
    id: 5,
    name: "Vahumana",
    speciality: "Aetiology",
  },
  {
    id: 6,
    name: "Kshahrewar",
    speciality: "Technology",
  },
];

async function main() {
  students.forEach(async (student) => {
    await prisma.student.create({
      data: student,
    });
  });

  console.log("Seeder run successfully");
}

async function main() {
  for (darshan of darshans) {
    await prisma.darshan.create({
      data: darshan,
    });
  }

  students.forEach(async (student) => {
    await prisma.student.create({
      data: student,
    });
  });

  console.log("Seeder run successfully");
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
