import { Test, TestingModule } from '@nestjs/testing';
import { PackItemsController } from './pack-items.controller';
import { PackItemsService } from './pack-items.service';

describe('PackItemsController', () => {
  let controller: PackItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackItemsController],
      providers: [PackItemsService],
    }).compile();

    controller = module.get<PackItemsController>(PackItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
