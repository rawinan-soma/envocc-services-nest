/*
  Warnings:

  - You are about to drop the column `app` on the `conference_req` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `conference_req` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "conference_req" DROP COLUMN "app",
DROP COLUMN "role";
