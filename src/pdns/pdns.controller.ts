import { Controller, Get, Patch } from '@nestjs/common';
import { PdnsService } from './pdns.service';

@Controller('pdns')
export class PdnsController {
  constructor(private readonly pdnsService: PdnsService) {}
  //베가스 특정 url 조회
  @Get('/singleurl')
  singleurl() {
    return this.pdnsService.singleurl();
  }

  //베가스 웹서버 전체에 있는 IP 주소, 상태 찾기
  @Get('/allurl')
  allurl() {
    return this.pdnsService.allurl();
  }

  //특정 구조에 속한 베가스 url 조회
  @Get('/cluster')
  cluster() {
    return this.pdnsService.cluster();
  }

  //베가스 특정 url content 수정
  @Patch('/singleip')
  singleip() {
    return this.pdnsService.singleip();
  }

  //베가스 url content 여러개 수정
  @Patch('/multipleip')
  multipleip() {
    return this.pdnsService.multipleip();
  }
}
