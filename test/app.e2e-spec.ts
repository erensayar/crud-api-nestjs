import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { UserModule } from '../src/user/user.module';
import { NoteModule } from '../src/note/note.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {

  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [UserModule, NoteModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });


  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });


});
