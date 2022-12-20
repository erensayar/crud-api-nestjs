import { Injectable } from '@nestjs/common';
import { CreateHedeDto } from './dto/create-hede.dto';
import { UpdateHedeDto } from './dto/update-hede.dto';

@Injectable()
export class HedeService {
  create(createHedeDto: CreateHedeDto) {
    return 'This action adds a new hede';
  }

  findAll() {
    return `This action returns all hede`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hede`;
  }

  update(id: number, updateHedeDto: UpdateHedeDto) {
    return `This action updates a #${id} hede`;
  }

  remove(id: number) {
    return `This action removes a #${id} hede`;
  }
}
