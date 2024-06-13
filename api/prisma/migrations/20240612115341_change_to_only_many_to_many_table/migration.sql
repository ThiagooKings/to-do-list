/*
  Warnings:

  - You are about to drop the `Board_Admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Board_Admin" DROP CONSTRAINT "Board_Admin_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Board_Admin" DROP CONSTRAINT "Board_Admin_boardId_fkey";

-- AlterTable
ALTER TABLE "Board_User" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Board_Admin";
