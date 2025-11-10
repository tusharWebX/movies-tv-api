import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.entry.createMany({
    data: [
      { title: "Inception", type: "MOVIE", director: "Christopher Nolan" },
      { title: "Spirited Away", type: "MOVIE", director: "Hayao Miyazaki" },
      { title: "Breaking Bad", type: "TV_SHOW", director: "Vince Gilligan" },
      { title: "Dark", type: "TV_SHOW", director: "Baran bo Odar" }
    ]
  });
}

main().catch(console.error).finally(() => prisma.$disconnect());
