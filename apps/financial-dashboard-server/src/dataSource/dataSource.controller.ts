import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataSourceService } from "./dataSource.service";
import { DataSourceControllerBase } from "./base/dataSource.controller.base";

@swagger.ApiTags("dataSources")
@common.Controller("dataSources")
export class DataSourceController extends DataSourceControllerBase {
  constructor(protected readonly service: DataSourceService) {
    super(service);
  }
}
