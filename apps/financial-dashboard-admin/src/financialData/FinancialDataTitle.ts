import { FinancialData as TFinancialData } from "../api/financialData/FinancialData";

export const FINANCIALDATA_TITLE_FIELD = "source";

export const FinancialDataTitle = (record: TFinancialData): string => {
  return record.source?.toString() || String(record.id);
};
