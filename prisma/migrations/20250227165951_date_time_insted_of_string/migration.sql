/*
  Warnings:

  - You are about to alter the column `endTime` on the `RoomBooking` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `startTime` on the `RoomBooking` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RoomBooking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subject" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_RoomBooking" ("createdAt", "endTime", "id", "roomId", "startTime", "subject", "updatedAt") SELECT "createdAt", "endTime", "id", "roomId", "startTime", "subject", "updatedAt" FROM "RoomBooking";
DROP TABLE "RoomBooking";
ALTER TABLE "new_RoomBooking" RENAME TO "RoomBooking";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
