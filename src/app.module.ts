import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { MySqlConfigModule } from './config/database/config.module';
import { MySqlConfigService } from './config/database/config.service';
import { UserController } from './user/user.controller';
import { PdnsController } from './pdns/pdns.controller';
import { UserService } from './user/user.service';
import { PdnsService } from './pdns/pdns.service';

//메인
//https://docs.nestjs.com/techniques/database#multiple-databases db 여러개 연결도가능함
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigModule],
      useClass: MySqlConfigService,
      inject: [MySqlConfigService],
    }),
  ],
  controllers: [UserController, PdnsController],
  providers: [AppService, UserService, PdnsService],
})
export class AppModule {}
