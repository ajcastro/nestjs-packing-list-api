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
    await this.validateUniquePackItemName(createPackItemDto.name);

    return await this.databaseService.packItem.create({
      data: createPackItemDto,
    });
  }

  async findAll(search?: string) {
    return await this.databaseService.packItem.findMany({
      where: {
        name: {
          contains: search ? search : '',
          mode: 'insensitive',
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
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
    await this.validateUniquePackItemName(updatePackItemDto.name, id);

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

  async validateUniquePackItemName(name: string, id?: number) {
    const packItem = await this.databaseService.packItem.findUnique({
      where: {
        name,
      },
    });

    let exists: boolean = !!packItem;

    if (id) {
      exists = packItem.id !== id;
    }

    if (exists) {
      throw new BadRequestException({
        status: 'error',
        message: 'Pack item name already exists.',
      });
    }
  }
}
