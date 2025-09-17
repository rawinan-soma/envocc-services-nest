import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'; // นำเข้า PrismaClient

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super(); // การเรียก constructor ของ PrismaClient
  }

  // การเชื่อมต่อและตัดการเชื่อมต่อ
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
