/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, IsOptional, IsEnum } from "class-validator";
import { EnumDataSourcePeriodicity } from "./EnumDataSourcePeriodicity";

@InputType()
class DataSourceCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDataSourcePeriodicity,
  })
  @IsEnum(EnumDataSourcePeriodicity)
  @IsOptional()
  @Field(() => EnumDataSourcePeriodicity, {
    nullable: true,
  })
  periodicity?: "Option1" | null;
}

export { DataSourceCreateInput as DataSourceCreateInput };
