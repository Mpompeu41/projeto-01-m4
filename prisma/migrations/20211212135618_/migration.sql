-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "confirmpassword" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Filme" (
    "id" TEXT NOT NULL,
    "namefilme" TEXT NOT NULL,
    "nameenglish" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "totaleps" TEXT NOT NULL,
    "totaltemp" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "assistido" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FilmeToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Filme_nameFilme_key" ON "Filme"("namefilme");

-- CreateIndex
CREATE UNIQUE INDEX "Filme_nameenglish_key" ON "Filme"("nameenglish");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmeToUser_AB_unique" ON "_FilmeToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmeToUser_B_index" ON "_FilmeToUser"("B");

-- AddForeignKey
ALTER TABLE "_FilmeToUser" ADD FOREIGN KEY ("A") REFERENCES "Filme"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmeToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;