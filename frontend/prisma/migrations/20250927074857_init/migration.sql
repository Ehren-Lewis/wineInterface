-- CreateTable
CREATE TABLE "Wine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wineType" TEXT NOT NULL,
    "varietal" TEXT NOT NULL,
    "producer" TEXT NOT NULL,
    "wineName" TEXT,
    "vintage" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "classification" TEXT,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Grape" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "WineGrape" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wineId" INTEGER NOT NULL,
    "grapeId" INTEGER NOT NULL,
    "percent" REAL,
    CONSTRAINT "WineGrape_wineId_fkey" FOREIGN KEY ("wineId") REFERENCES "Wine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WineGrape_grapeId_fkey" FOREIGN KEY ("grapeId") REFERENCES "Grape" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Grape_name_key" ON "Grape"("name");
