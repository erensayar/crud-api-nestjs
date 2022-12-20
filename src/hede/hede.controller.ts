import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HedeService } from './hede.service';
import { CreateHedeDto } from './dto/create-hede.dto';
import { UpdateHedeDto } from './dto/update-hede.dto';

@Controller()
export class HedeController {
  
  constructor(private readonly hedeService: HedeService) {}

  @MessagePattern('createHede')
  create(@Payload() createHedeDto: CreateHedeDto) {
    return this.hedeService.create(createHedeDto);
  }

  @MessagePattern('findAllHede')
  findAll() {
    return this.hedeService.findAll();
  }

  @MessagePattern('findOneHede')
  findOne(@Payload() id: number) {
    return this.hedeService.findOne(id);
  }

  @MessagePattern('updateHede')
  update(@Payload() updateHedeDto: UpdateHedeDto) {
    return this.hedeService.update(updateHedeDto.id, updateHedeDto);
  }

  @MessagePattern('removeHede')
  remove(@Payload() id: number) {
    return this.hedeService.remove(id);
  }
}
