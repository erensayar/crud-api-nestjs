import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema({_id: true})
export class User {

    //@Prop()
    //id: Number;

    @Prop()
    firstName: { type: String, default: null };

    @Prop()
    lastName: { type: String, default: null };

    @Prop()
    email: { type: String, unique: true };

    @Prop()
    password: { type: String };

    @Prop()
    age: { type: Number, min: 18, max: 65 };

    @Prop()
    token: { type: String };

}

export const UserSchema = SchemaFactory.createForClass(User);