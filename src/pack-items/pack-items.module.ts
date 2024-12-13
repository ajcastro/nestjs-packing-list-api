import { Module } from '@nestjs/common';
import { PackItemsService } from './pack-items.service';
import { PackItemsController } from './pack-items.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PackItemsController],
  providers: [PackItemsService],
})
export class PackItemsModule {}
