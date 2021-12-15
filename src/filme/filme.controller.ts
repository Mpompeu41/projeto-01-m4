import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { Filme } from '@prisma/client';
import { FilmeService } from './filme.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto, WatchedDto } from './dto/update-filme.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('filme')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @UseGuards(AuthGuard())
  @Post('create-filme')
  create(@Body() createFilmeDto: CreateFilmeDto): Promise<Filme> {
    return this.filmeService.create(createFilmeDto);
  }

  @Get('get-filme')
  findAll(): Promise<Filme[]> {
    return this.filmeService.findAll();
  }

  @UseGuards(AuthGuard())
  @Get('get-one/:id')
  findOne(@Param('id') id: string): Promise<Filme> {
    return this.filmeService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @Patch('update-filme/:id')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto): Promise<Filme> {
    return this.filmeService.update(id, updateFilmeDto);
  }

  @UseGuards(AuthGuard())
  @Delete('delete-filme/:id')
  remove(@Param('id') id: string): Promise<{message: string}> {
    return this.filmeService.remove(id);
  }

  @UseGuards(AuthGuard())
  @Patch('update-watched/:id')
  updateWatched(@Param('id') id: string, @Body() dados: WatchedDto): Promise<Filme> {
    return this.filmeService.updateWatched(id, dados);
  }
}
