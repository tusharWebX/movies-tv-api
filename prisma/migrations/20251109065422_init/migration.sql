-- CreateEnum
CREATE TYPE "EntryType" AS ENUM ('MOVIE', 'TV_SHOW');

-- CreateTable
CREATE TABLE "Entry" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" "EntryType" NOT NULL,
    "director" TEXT NOT NULL,
    "budget" INTEGER,
    "location" TEXT,
    "duration" INTEGER,
    "year" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entry_pkey" PRIMARY KEY ("id")
);
