import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//https://lab.cliel.com/entry/nestjs-TypeORM-%EA%B8%B0%EC%A1%B4-%ED%85%8C%EC%9D%B4%EB%B8%94%EC%97%90%EC%84%9C-entity-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0

@Entity('testdns', { schema: 'failover' })
export class Testdns {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'IP', length: 15, default: () => "'0'" })
  ip: string;

  @Column('varchar', { name: 'URL', length: 50, default: () => "'0'" })
  url: string;
}
