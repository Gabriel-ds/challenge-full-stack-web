/*
  Warnings:

  - Added the required column `updatedAt` to the `studants` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_studants" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ra" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_studants" ("cpf", "id", "name", "ra") SELECT "cpf", "id", "name", "ra" FROM "studants";
DROP TABLE "studants";
ALTER TABLE "new_studants" RENAME TO "studants";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
