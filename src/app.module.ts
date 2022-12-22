import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { MongooseModule } from '@nestjs/mongoose';
import applicationProperties from './app.properties';

@Module({
  imports: [
    UserModule,
    NoteModule,
    MongooseModule.forRoot(applicationProperties.DB_URL, { dbName: applicationProperties.DB_NAME }),
  ]
})
export class AppModule { }
