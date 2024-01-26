-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_studants" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ra" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_studants" ("cpf", "createdAt", "email", "id", "name", "ra", "updatedAt") SELECT "cpf", "createdAt", "email", "id", "name", "ra", "updatedAt" FROM "studants";
DROP TABLE "studants";
ALTER TABLE "new_studants" RENAME TO "studants";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
