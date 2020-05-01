import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

import { ProfileModule } from './profiles/profile.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ProfileModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
