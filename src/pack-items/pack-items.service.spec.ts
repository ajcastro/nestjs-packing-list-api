import { Test, TestingModule } from '@nestjs/testing';
import { PackItemsService } from './pack-items.service';

describe('PackItemsService', () => {
  let service: PackItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PackItemsService],
    }).compile();

    service = module.get<PackItemsService>(PackItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
