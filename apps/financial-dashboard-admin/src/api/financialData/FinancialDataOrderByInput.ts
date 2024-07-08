import { SortOrder } from "../../util/SortOrder";

export type FinancialDataOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  value?: SortOrder;
  source?: SortOrder;
};
