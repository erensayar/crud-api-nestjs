import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type NoteDocument = Note & Document;

@Schema({_id: true})
export class Note {

    //@Prop()
    //id: Number;

    @Prop()
    UserId: Number;

    @Prop()
    title: String;

    @Prop()
    content: String;

}

export const NoteSchema = SchemaFactory.createForClass(Note);