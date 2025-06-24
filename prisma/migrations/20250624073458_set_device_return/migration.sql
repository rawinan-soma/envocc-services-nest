/*
  Warnings:

  - Added the required column `device` to the `repair_req` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "repair_req" ADD COLUMN     "device" TEXT NOT NULL;
