-- AlterTable
ALTER TABLE "repair_req" ALTER COLUMN "device" DROP NOT NULL;

-- CreateTable
CREATE TABLE "conference_req" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "meeting_title" VARCHAR NOT NULL,
    "meeting_password" TEXT NOT NULL,
    "start_datetime" DATE NOT NULL,
    "end_datetime" DATE NOT NULL,
    "user" INTEGER NOT NULL,
    "room" INTEGER NOT NULL,
    "equipment" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "app" TEXT NOT NULL,

    CONSTRAINT "conference_req_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conference_res" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "conference_req_id" TEXT NOT NULL,
    "meeting_title" TEXT NOT NULL,
    "meeting_password" TEXT NOT NULL,
    "meeting_link" TEXT NOT NULL,
    "meeting_number" VARCHAR NOT NULL,

    CONSTRAINT "conference_res_pkey" PRIMARY KEY ("id")
);
