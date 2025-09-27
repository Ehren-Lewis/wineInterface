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
    "price" INTEGER
);
INSERT INTO "new_Wine" ("classification", "id", "name", "price", "producer", "region", "type", "vintage") SELECT "classification", "id", "name", "price", "producer", "region", "type", "vintage" FROM "Wine";
DROP TABLE "Wine";
ALTER TABLE "new_Wine" RENAME TO "Wine";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
