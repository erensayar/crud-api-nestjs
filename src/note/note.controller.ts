import { Controller, Get, Post, Body, Res, Put, Param, Delete, HttpStatus } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './model/dto/create-note.dto';
import { UpdateNoteDto } from './model/dto/update-note.dto';

@Controller('notes')
export class NoteController {


  constructor(private readonly noteService: NoteService) { }


  @Post()
  create(@Res() response, @Body() createNoteDto: CreateNoteDto) {
    const newNote = this.noteService.create(createNoteDto);
    return response.status(HttpStatus.CREATED).json({ newNote })
  }


  @Get()
  findAll(@Res() response) {
    const notes = this.noteService.findAll();
    return response.status(HttpStatus.OK).json({ notes })
  }


  @Get(':id')
  findOne(@Res() response, @Param('id') id: string) {
    const note = this.noteService.findOne(+id);
    return response.status(HttpStatus.OK).json({ note });
  }


  @Put(':id')
  update(@Res() response, @Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    const updatedBook = this.noteService.update(+id, updateNoteDto);
    return response.status(HttpStatus.OK).json({ updatedBook })
  }


  @Delete(':id')
  delete(@Res() response, @Param('id') id: string) {
    const deletedBook = this.noteService.delete(+id);
    return response.status(HttpStatus.OK).json({ deletedBook })
  }


}