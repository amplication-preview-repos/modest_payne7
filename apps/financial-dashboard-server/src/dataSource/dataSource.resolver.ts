import * as graphql from "@nestjs/graphql";
import { DataSourceResolverBase } from "./base/dataSource.resolver.base";
import { DataSource } from "./base/DataSource";
import { DataSourceService } from "./dataSource.service";

@graphql.Resolver(() => DataSource)
export class DataSourceResolver extends DataSourceResolverBase {
  constructor(protected readonly service: DataSourceService) {
    super(service);
  }
}
