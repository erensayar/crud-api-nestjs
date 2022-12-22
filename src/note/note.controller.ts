import { Controller, Get, Post, Body, Res, Put, Param, Delete, HttpStatus } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './model/dto/create-note.dto';
import { UpdateNoteDto } from './model/dto/update-note.dto';
import { NoteDocument } from './model/schema/note.schema';

@Controller('notes')
export class NoteController {


  constructor(private readonly noteService: NoteService) { }


  @Post()
  async create(@Res() response, @Body() createNoteDto: CreateNoteDto): Promise<NoteDocument> {
    const newNote = await this.noteService.create(createNoteDto);
    response.status(HttpStatus.CREATED);
    return newNote;
  }


  @Get()
  async findAll(@Res() response): Promise<NoteDocument[]> {
    const notes = await this.noteService.findAll();
    response.status(HttpStatus.OK);
    return notes;
  }


  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string): Promise<NoteDocument> {
    const note = await this.noteService.findOne(+id);
    response.status(HttpStatus.OK);
    return note;
  }


  @Put(':id')
  async update(@Res() response, @Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto): Promise<NoteDocument> {
    const updatedBook = await this.noteService.update(+id, updateNoteDto);
    response.status(HttpStatus.OK);
    return updatedBook;
  }


  @Delete(':id')
  async delete(@Res() response, @Param('id') id: string): Promise<NoteDocument> {
    const deletedBook = await this.noteService.delete(+id);
    response.status(HttpStatus.OK);
    return deletedBook;
  }


}