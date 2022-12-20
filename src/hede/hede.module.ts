import { Module } from '@nestjs/common';
import { HedeService } from './hede.service';
import { HedeController } from './hede.controller';

@Module({
  controllers: [HedeController],
  providers: [HedeService]
})
export class HedeModule {}
