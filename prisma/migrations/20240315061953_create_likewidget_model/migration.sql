/*
  Warnings:

  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isLiked" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Like";

-- CreateTable
CREATE TABLE "LikeWidget" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 23,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LikeWidget_pkey" PRIMARY KEY ("id")
);
