import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePackItemDto } from './dto/create-pack-item.dto';
import { UpdatePackItemDto } from './dto/update-pack-item.dto';
// import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PackItemsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createPackItemDto: CreatePackItemDto) {
    return await this.databaseService.packItem.create({
      data: createPackItemDto,
    });
  }

  async findAll() {
    return await this.databaseService.packItem.findMany();
  }

  async findOne(id: number) {
    const packItem = await this.databaseService.packItem.findUnique({
      where: {
        id,
      },
    });

    if (!packItem) throw new NotFoundException('Pack Item Not Found');

    return packItem;
  }

  async update(id: number, updatePackItemDto: UpdatePackItemDto) {
    await this.findOne(id);

    return this.databaseService.packItem.update({
      where: {
        id,
      },
      data: updatePackItemDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.databaseService.packItem.delete({
      where: {
        id,
      },
    });
  }
}
