import { Injectable } from '@nestjs/common';

@Injectable()
export class PdnsService {
  //1개의 IP 주소에 대한 서버 이름
  singleurl(): string {
    return 'got new IP address';
  }

  allurl(): string {
    return 'all IP addresses';
  }

  cluster(): string {
    return 'IP of specific cluster';
  }

  singleip(): string {
    return 'change single IP address';
  }

  multipleip(): string {
    return 'change multiple IP addresses';
  }
}
