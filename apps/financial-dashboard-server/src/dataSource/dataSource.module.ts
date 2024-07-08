import { Module } from "@nestjs/common";
import { DataSourceModuleBase } from "./base/dataSource.module.base";
import { DataSourceService } from "./dataSource.service";
import { DataSourceController } from "./dataSource.controller";
import { DataSourceResolver } from "./dataSource.resolver";

@Module({
  imports: [DataSourceModuleBase],
  controllers: [DataSourceController],
  providers: [DataSourceService, DataSourceResolver],
  exports: [DataSourceService],
})
export class DataSourceModule {}
