/*
  Warnings:

  - You are about to drop the `_BoardToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BoardToUser" DROP CONSTRAINT "_BoardToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_BoardToUser" DROP CONSTRAINT "_BoardToUser_B_fkey";

-- DropTable
DROP TABLE "_BoardToUser";

-- CreateTable
CREATE TABLE "Board_User" (
    "boardId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "included_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Board_User_pkey" PRIMARY KEY ("boardId","userId")
);

-- CreateTable
CREATE TABLE "Board_Admin" (
    "boardId" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "included_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Board_Admin_pkey" PRIMARY KEY ("boardId","adminId")
);

-- AddForeignKey
ALTER TABLE "Board_User" ADD CONSTRAINT "Board_User_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board_User" ADD CONSTRAINT "Board_User_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board_Admin" ADD CONSTRAINT "Board_Admin_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board_Admin" ADD CONSTRAINT "Board_Admin_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
