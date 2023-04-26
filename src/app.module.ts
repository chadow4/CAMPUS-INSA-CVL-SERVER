import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from './user/user.module';
import { UserEntity } from "./user/user.entity";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ ConfigModule.forRoot(),TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "campusinsacvl",
    entities: [UserEntity], // adding entities
    synchronize: true
  }), UserModule, AuthModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
