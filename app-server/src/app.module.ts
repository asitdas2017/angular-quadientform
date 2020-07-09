import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

import { ProfileModule } from './profiles/profile.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(config.mongoURI),
    ProfileModule
  ],
  // controllers: [AppController],
  controllers: [],
  // providers: [AppService],
  providers: [],
})
export class AppModule { }
