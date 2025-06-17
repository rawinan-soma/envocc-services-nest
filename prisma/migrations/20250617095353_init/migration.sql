-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


-- CreateTable
CREATE TABLE "group" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "position" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "position_level" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "position_level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "room" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "image_url" VARCHAR NOT NULL,
    "capacity" INTEGER NOT NULL,
    "has_equipment" BOOLEAN NOT NULL,

    CONSTRAINT "room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "room_booking" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "user" INTEGER NOT NULL,
    "room" INTEGER NOT NULL,
    "meeting_title" VARCHAR NOT NULL,
    "attendees" INTEGER NOT NULL,
    "start_datetime" DATE NOT NULL,
    "end_datetime" DATE NOT NULL,
    "need_equipment" BOOLEAN NOT NULL,
    "notes" VARCHAR,

    CONSTRAINT "room_booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "prefix" VARCHAR NOT NULL,
    "thai_f_name" VARCHAR NOT NULL,
    "thai_l_name" VARCHAR NOT NULL,
    "eng_f_name" VARCHAR NOT NULL,
    "eng_l_name" VARCHAR NOT NULL,
    "phone" VARCHAR NOT NULL,
    "line_id" VARCHAR NOT NULL,
    "role" VARCHAR NOT NULL DEFAULT 'user',
    "status" BOOLEAN NOT NULL DEFAULT false,
    "group" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "position_level" INTEGER NOT NULL,
    "avatar_id" VARCHAR NOT NULL,
    "create_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hashedRefreshToken" VARCHAR,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "room_booking" ADD CONSTRAINT "room_booking_user_fkey" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room_booking" ADD CONSTRAINT "room_booking_room_fkey" FOREIGN KEY ("room") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_group_fkey" FOREIGN KEY ("group") REFERENCES "group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_position_fkey" FOREIGN KEY ("position") REFERENCES "position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_position_level_fkey" FOREIGN KEY ("position_level") REFERENCES "position_level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
