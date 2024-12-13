import { PartialType } from '@nestjs/mapped-types';
import { CreatePackItemDto } from './create-pack-item.dto';

export class UpdatePackItemDto extends PartialType(CreatePackItemDto) {}
