-- CreateTable
CREATE TABLE "repair_req" (
    "ticketId" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "user" INTEGER NOT NULL,
    "device" TEXT NOT NULL,
    "problem" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "repair_req_pkey" PRIMARY KEY ("ticketId")
);

-- AddForeignKey
ALTER TABLE "repair_req" ADD CONSTRAINT "repair_req_user_fkey" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
