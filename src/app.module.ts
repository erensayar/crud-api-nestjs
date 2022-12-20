import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    UserModule,
    NoteModule
    //MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  ]
})
export class AppModule {
  
}
