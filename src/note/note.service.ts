import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { NoteDocument } from 'src/note/model/schema/note.schema';
import { CreateNoteDto } from './model/dto/create-note.dto';
import { UpdateNoteDto } from './model/dto/update-note.dto';

@Injectable()
export class NoteService {


  constructor(@InjectModel('Note') private noteModel: Model<NoteDocument>) { }


  async create(createNoteDto: CreateNoteDto): Promise<NoteDocument> {
    console.log(createNoteDto);
    const newNote = new this.noteModel(createNoteDto);
    return newNote.save();
  }


  async findOne(id: number): Promise<NoteDocument> {
    const noteInDb = await this.noteModel.findById(id).exec();
    if (!noteInDb) {
      throw new NotFoundException(`Note not found. Note : #${id}`);
    }
    return noteInDb;
  }


  async findAll(): Promise<NoteDocument[]> {
    const notes = await this.noteModel.find().exec();
    if (!notes || notes.length == 0) {
      throw new NotFoundException('Note data not found!');
    }
    return notes;
  }


  async update(id: number, updateNoteDto: UpdateNoteDto): Promise<NoteDocument> {
    console.log(`This action updates a #${id} note`);
    const noteInDb = await this.noteModel.findByIdAndUpdate(id, updateNoteDto, { new: true });
    if (!noteInDb) {
      throw new NotFoundException(`Note not found. Note Id : #${id}`);
    }
    return noteInDb;
  }


  async delete(id: number): Promise<NoteDocument> {
    const noteInDb = await this.noteModel.findByIdAndDelete(id);
    if (!noteInDb) {
        throw new NotFoundException(`Student not found. Strudent Id : #${id}`);
    }
    return noteInDb;
  }


}