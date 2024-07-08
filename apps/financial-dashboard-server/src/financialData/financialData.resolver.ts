import * as graphql from "@nestjs/graphql";
import { FinancialDataResolverBase } from "./base/financialData.resolver.base";
import { FinancialData } from "./base/FinancialData";
import { FinancialDataService } from "./financialData.service";

@graphql.Resolver(() => FinancialData)
export class FinancialDataResolver extends FinancialDataResolverBase {
  constructor(protected readonly service: FinancialDataService) {
    super(service);
  }
}
