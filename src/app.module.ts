import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user/model/schema/user.schema';
import { NoteSchema } from './note/model/schema/note.schema';

// process.env.DB_URL
const { DB_URL } = process.env;
const { DB_NAME } = process.env;

@Module({
  imports: [
    UserModule,
    NoteModule,
    MongooseModule.forRoot(DB_URL, { dbName: DB_NAME }),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Note', schema: NoteSchema }
    ])
  ]
})
export class AppModule { }
