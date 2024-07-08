/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FinancialDataService } from "../financialData.service";
import { FinancialDataCreateInput } from "./FinancialDataCreateInput";
import { FinancialData } from "./FinancialData";
import { FinancialDataFindManyArgs } from "./FinancialDataFindManyArgs";
import { FinancialDataWhereUniqueInput } from "./FinancialDataWhereUniqueInput";
import { FinancialDataUpdateInput } from "./FinancialDataUpdateInput";

export class FinancialDataControllerBase {
  constructor(protected readonly service: FinancialDataService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FinancialData })
  async createFinancialData(
    @common.Body() data: FinancialDataCreateInput
  ): Promise<FinancialData> {
    return await this.service.createFinancialData({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        value: true,
        source: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FinancialData] })
  @ApiNestedQuery(FinancialDataFindManyArgs)
  async financialDataItems(
    @common.Req() request: Request
  ): Promise<FinancialData[]> {
    const args = plainToClass(FinancialDataFindManyArgs, request.query);
    return this.service.financialDataItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        value: true,
        source: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FinancialData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async financialData(
    @common.Param() params: FinancialDataWhereUniqueInput
  ): Promise<FinancialData | null> {
    const result = await this.service.financialData({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        value: true,
        source: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FinancialData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFinancialData(
    @common.Param() params: FinancialDataWhereUniqueInput,
    @common.Body() data: FinancialDataUpdateInput
  ): Promise<FinancialData | null> {
    try {
      return await this.service.updateFinancialData({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          date: true,
          value: true,
          source: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FinancialData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFinancialData(
    @common.Param() params: FinancialDataWhereUniqueInput
  ): Promise<FinancialData | null> {
    try {
      return await this.service.deleteFinancialData({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          date: true,
          value: true,
          source: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
