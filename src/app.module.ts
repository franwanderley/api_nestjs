import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      `mongodb+srv://root:${process.env.MONGODB_PASSWORD}@cluster0.czuzh.mongodb.net/test`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
