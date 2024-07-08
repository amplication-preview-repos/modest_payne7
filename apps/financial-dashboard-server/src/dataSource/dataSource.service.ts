import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataSourceServiceBase } from "./base/dataSource.service.base";

@Injectable()
export class DataSourceService extends DataSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
