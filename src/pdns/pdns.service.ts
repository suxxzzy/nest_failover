import { Injectable } from '@nestjs/common';

//데이터베이스에서 요청을 보낼 DNS IP 주소를 갖고온다= 변수에 할당
//그 주소로 rest 요청을 보내야한다.

@Injectable()
export class PdnsService {
  //1개의 url주소에 대한 서버 name, IP, 연결상태 알아낼 것.
  singleurl(url: string): string {
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
