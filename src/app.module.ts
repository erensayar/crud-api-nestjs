import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { HedeModule } from './hede/hede.module';

@Module({
  imports: [
    UserModule,
    NoteModule,
    HedeModule
    //MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  ]
})
export class AppModule {
  
}
