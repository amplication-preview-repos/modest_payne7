import { SortOrder } from "../../util/SortOrder";

export type DataSourceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
  periodicity?: SortOrder;
};
