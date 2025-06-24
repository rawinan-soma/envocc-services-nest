/*
  Warnings:

  - A unique constraint covering the columns `[bookingId]` on the table `conference_req` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "conference_req" ADD COLUMN     "bookingId" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "conference_req_bookingId_key" ON "conference_req"("bookingId");

-- AddForeignKey
ALTER TABLE "conference_req" ADD CONSTRAINT "conference_req_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "room_booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;
