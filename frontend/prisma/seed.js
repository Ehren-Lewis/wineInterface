import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.wine.create({
    data: {
      name: "Vermentino 'Groppolo'",
      vintage: 2023,
      region: "Liguria",
      producer: "Il Montecello",
      type: "White",
      imageUrl: "wines/white/vermentino.png",
      grapes: {
        create: [
          {
            grape: {
              connectOrCreate: {
                where: { name: "Vermentino" },
                create: { name: "Vermentino" }
              }
            },
            percent: 100
          }
        ]
      }
    }
  });

  await prisma.wine.create({
    data: {
      name: "Brunello di Montalcino",
      vintage: 2019,
      region: "Tuscany",
      producer: "La Fiorita",
      type: "Red",
      imageUrl: "wines/red/brunello.png",
      grapes: {
        create: [
          {
            grape: {
              connectOrCreate: {
                where: { name: "Sangiovese" },
                create: { name: "Sangiovese" }
              }
            },
            percent: 100
          }
        ]
      }
    }
  });

  await prisma.wine.create({
    data: {
      name: "Lambrusco 'Quercioli'",
      vintage: null, // NV = non-vintage
      region: "Emilia Romagna",
      producer: "Medici Ermete",
      type: "Sparkling Red",
      imageUrl: "wines/sparkling/lambrusco.png",
      grapes: {
        create: [
          {
            grape: {
              connectOrCreate: {
                where: { name: "Lambrusco" },
                create: { name: "Lambrusco" }
              }
            },
            percent: 100
          }
        ]
      }
    }
  });

  await prisma.wine.create({
    data: {
      name: "Rosé Côtes de Provence",
      vintage: 2022,
      region: "Provence",
      producer: "Château Minuty",
      type: "Rosé",
      imageUrl: "wines/rose/minuty.png",
      grapes: {
        create: [
          {
            grape: {
              connectOrCreate: {
                where: { name: "Grenache" },
                create: { name: "Grenache" }
              }
            },
            percent: 60
          },
          {
            grape: {
              connectOrCreate: {
                where: { name: "Cinsault" },
                create: { name: "Cinsault" }
              }
            },
            percent: 40
          }
        ]
      }
    }
  });

  await prisma.wine.create({
    data: {
      name: "Sauternes",
      vintage: 2018,
      region: "Bordeaux",
      producer: "Château Rieussec",
      type: "Dessert",
      imageUrl: "wines/dessert/sauternes.png",
      grapes: {
        create: [
          {
            grape: {
              connectOrCreate: {
                where: { name: "Sémillon" },
                create: { name: "Sémillon" }
              }
            },
            percent: 70
          },
          {
            grape: {
              connectOrCreate: {
                where: { name: "Sauvignon Blanc" },
                create: { name: "Sauvignon Blanc" }
              }
            },
            percent: 25
          },
          {
            grape: {
              connectOrCreate: {
                where: { name: "Muscadelle" },
                create: { name: "Muscadelle" }
              }
            },
            percent: 5
          }
        ]
      }
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
