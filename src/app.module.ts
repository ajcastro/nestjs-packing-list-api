import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PackItemsModule } from './pack-items/pack-items.module';

@Module({
  imports: [DatabaseModule, PackItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
