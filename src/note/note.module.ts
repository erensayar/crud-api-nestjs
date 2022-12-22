import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from './model/schema/note.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Note', schema: NoteSchema }
    ])
  ],
  controllers: [NoteController],
  providers: [NoteService]
})
export class NoteModule {}
