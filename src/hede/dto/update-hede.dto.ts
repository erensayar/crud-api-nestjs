import { PartialType } from '@nestjs/mapped-types';
import { CreateHedeDto } from './create-hede.dto';

export class UpdateHedeDto extends PartialType(CreateHedeDto) {
  id: number;
}
