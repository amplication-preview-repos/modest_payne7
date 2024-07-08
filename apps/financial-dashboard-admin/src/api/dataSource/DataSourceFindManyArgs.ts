import { DataSourceWhereInput } from "./DataSourceWhereInput";
import { DataSourceOrderByInput } from "./DataSourceOrderByInput";

export type DataSourceFindManyArgs = {
  where?: DataSourceWhereInput;
  orderBy?: Array<DataSourceOrderByInput>;
  skip?: number;
  take?: number;
};
