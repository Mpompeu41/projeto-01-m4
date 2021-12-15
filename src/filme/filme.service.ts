import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Filme } from '@prisma/client'
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto, WatchedDto } from './dto/update-filme.dto';

@Injectable()
export class FilmeService {
  constructor(private db: PrismaService) { }
  
  async create(dados: CreateFilmeDto): Promise<Filme> {
    const filmeExist = await this.db.filme.findUnique({
      where: { namefilme: dados.namefilme },
    });
    if (filmeExist) {
      throw new ConflictException('This filme has already been registered in our database.')
    }
    const filme = await this.db.filme.create({ data: dados });
    return filme
  }

  async findAll(): Promise<Filme[]> {
   const filmes = await this.db.filme.findMany();
   return filmes;
  }

  async findOne(id: string): Promise<Filme> {
    const filmeExist = await this.db.filme.findUnique({
      where: { id }
    });
    if (!filmeExist){
      throw new NotFoundException(
        "Filme with the entered ID is not in our database"
      )
    }
    return filmeExist
  }

  async update(id: string, dados: UpdateFilmeDto): Promise<Filme> {
    const filme = await this.db.filme.update({
      data: dados,
      where: { id }
    })
    return filme;
  }

  async remove(id: string): Promise<{message: string}> {
    const filmeExist = await this.db.filme.findUnique({
      where: { id },
    });
    if(!filmeExist) {
      throw new NotFoundException(
        'Filme with the entered ID is not in our database'
      )
    }else {
      await this.db.filme.delete({
        where: {id}
      })
    }
    return {message:'Filme found and deleted'}
  }

  async updateWatched (id: string, dados: WatchedDto): Promise<Filme> {
    const Filme = await this.db.filme.update({
      data: dados,
      where: {id},
    })
    return Filme;
  }
}
