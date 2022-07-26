import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TwitterController } from './twitter/twitter.controller';
import { TwitterService } from './twitter/twitter.service';
import { TwitterModule } from './twitter/twitter.module';

@Module({
  imports: [
    TwitterModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/twitter'),
  ],
  controllers: [TwitterController],
  providers: [TwitterService],
})
export class AppModule {}
