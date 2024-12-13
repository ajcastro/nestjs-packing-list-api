import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { PackItemsService } from './pack-items.service';
import { CreatePackItemDto } from './dto/create-pack-item.dto';
import { UpdatePackItemDto } from './dto/update-pack-item.dto';

@Controller('pack-items')
export class PackItemsController {
  constructor(private readonly packItemsService: PackItemsService) {}

  @Post()
  create(@Body(ValidationPipe) createPackItemDto: CreatePackItemDto) {
    return this.packItemsService.create(createPackItemDto);
  }

  @Get()
  findAll(@Query('search') search?: string) {
    return this.packItemsService.findAll(search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packItemsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updatePackItemDto: UpdatePackItemDto,
  ) {
    return this.packItemsService.update(+id, updatePackItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packItemsService.remove(+id);
  }
}
