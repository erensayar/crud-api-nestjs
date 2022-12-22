import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema({_id: true})
export class User {

    //@Prop()
    //id: Number;

    @Prop()
    firstName: String;

    @Prop()
    lastName: String;

    @Prop()
    email: String;

    @Prop()
    password: String;

    @Prop()
    age: Number;

    @Prop()
    token: String;

}

export const UserSchema = SchemaFactory.createForClass(User);