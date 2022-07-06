import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { PdnsController } from './pdns/pdns.controller';
import { UserService } from './user/user.service';
import { PdnsService } from './pdns/pdns.service';

//메인

@Module({
  imports: [],
  controllers: [UserController, PdnsController],
  providers: [AppService, UserService, PdnsService],
})
export class AppModule {}
