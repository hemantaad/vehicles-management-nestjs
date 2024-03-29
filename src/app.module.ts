import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/edxplor'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
