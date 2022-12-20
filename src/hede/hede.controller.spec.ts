import { Test, TestingModule } from '@nestjs/testing';
import { HedeController } from './hede.controller';
import { HedeService } from './hede.service';

describe('HedeController', () => {
  let controller: HedeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HedeController],
      providers: [HedeService],
    }).compile();

    controller = module.get<HedeController>(HedeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
