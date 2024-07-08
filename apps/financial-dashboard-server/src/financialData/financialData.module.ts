import { Module } from "@nestjs/common";
import { FinancialDataModuleBase } from "./base/financialData.module.base";
import { FinancialDataService } from "./financialData.service";
import { FinancialDataController } from "./financialData.controller";
import { FinancialDataResolver } from "./financialData.resolver";

@Module({
  imports: [FinancialDataModuleBase],
  controllers: [FinancialDataController],
  providers: [FinancialDataService, FinancialDataResolver],
  exports: [FinancialDataService],
})
export class FinancialDataModule {}
