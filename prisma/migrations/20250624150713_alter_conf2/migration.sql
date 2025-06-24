/*
  Warnings:

  - You are about to drop the column `user` on the `conference_req` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `repair_req` table. All the data in the column will be lost.
  - You are about to drop the column `room` on the `room_booking` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `room_booking` table. All the data in the column will be lost.
  - You are about to drop the column `group` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `position_level` on the `user` table. All the data in the column will be lost.
  - Added the required column `userId` to the `conference_req` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `repair_req` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomId` to the `room_booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `room_booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupId` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `positionId` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position_levelId` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "repair_req" DROP CONSTRAINT "repair_req_user_fkey";

-- DropForeignKey
ALTER TABLE "room_booking" DROP CONSTRAINT "room_booking_room_fkey";

-- DropForeignKey
ALTER TABLE "room_booking" DROP CONSTRAINT "room_booking_user_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_group_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_position_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_position_level_fkey";

-- AlterTable
ALTER TABLE "conference_req" DROP COLUMN "user",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "repair_req" DROP COLUMN "user",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "room_booking" DROP COLUMN "room",
DROP COLUMN "user",
ADD COLUMN     "roomId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "group",
DROP COLUMN "position",
DROP COLUMN "position_level",
ADD COLUMN     "groupId" INTEGER NOT NULL,
ADD COLUMN     "positionId" INTEGER NOT NULL,
ADD COLUMN     "position_levelId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "room_booking" ADD CONSTRAINT "room_booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room_booking" ADD CONSTRAINT "room_booking_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_position_levelId_fkey" FOREIGN KEY ("position_levelId") REFERENCES "position_level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_req" ADD CONSTRAINT "repair_req_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conference_req" ADD CONSTRAINT "conference_req_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
