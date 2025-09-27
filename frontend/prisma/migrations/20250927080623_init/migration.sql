/*
  Warnings:

  - You are about to drop the column `varietal` on the `Wine` table. All the data in the column will be lost.
  - You are about to drop the column `wineName` on the `Wine` table. All the data in the column will be lost.
  - You are about to drop the column `wineType` on the `Wine` table. All the data in the column will be lost.
  - Added the required column `type` to the `Wine` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "producer" TEXT NOT NULL,
    "name" TEXT,
    "vintage" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "classification" TEXT,
    "price" INTEGER NOT NULL
);
INSERT INTO "new_Wine" ("classification", "id", "price", "producer", "region", "vintage") SELECT "classification", "id", "price", "producer", "region", "vintage" FROM "Wine";
DROP TABLE "Wine";
ALTER TABLE "new_Wine" RENAME TO "Wine";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
