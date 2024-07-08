/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DataSource } from "./DataSource";
import { DataSourceCountArgs } from "./DataSourceCountArgs";
import { DataSourceFindManyArgs } from "./DataSourceFindManyArgs";
import { DataSourceFindUniqueArgs } from "./DataSourceFindUniqueArgs";
import { CreateDataSourceArgs } from "./CreateDataSourceArgs";
import { UpdateDataSourceArgs } from "./UpdateDataSourceArgs";
import { DeleteDataSourceArgs } from "./DeleteDataSourceArgs";
import { DataSourceService } from "../dataSource.service";
@graphql.Resolver(() => DataSource)
export class DataSourceResolverBase {
  constructor(protected readonly service: DataSourceService) {}

  async _dataSourcesMeta(
    @graphql.Args() args: DataSourceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DataSource])
  async dataSources(
    @graphql.Args() args: DataSourceFindManyArgs
  ): Promise<DataSource[]> {
    return this.service.dataSources(args);
  }

  @graphql.Query(() => DataSource, { nullable: true })
  async dataSource(
    @graphql.Args() args: DataSourceFindUniqueArgs
  ): Promise<DataSource | null> {
    const result = await this.service.dataSource(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DataSource)
  async createDataSource(
    @graphql.Args() args: CreateDataSourceArgs
  ): Promise<DataSource> {
    return await this.service.createDataSource({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DataSource)
  async updateDataSource(
    @graphql.Args() args: UpdateDataSourceArgs
  ): Promise<DataSource | null> {
    try {
      return await this.service.updateDataSource({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DataSource)
  async deleteDataSource(
    @graphql.Args() args: DeleteDataSourceArgs
  ): Promise<DataSource | null> {
    try {
      return await this.service.deleteDataSource(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
