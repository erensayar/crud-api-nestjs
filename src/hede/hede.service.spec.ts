import { Test, TestingModule } from '@nestjs/testing';
import { HedeService } from './hede.service';

describe('HedeService', () => {
  let service: HedeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HedeService],
    }).compile();

    service = module.get<HedeService>(HedeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
