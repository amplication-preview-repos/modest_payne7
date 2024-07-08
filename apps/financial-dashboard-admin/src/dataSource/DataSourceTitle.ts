import { DataSource as TDataSource } from "../api/dataSource/DataSource";

export const DATASOURCE_TITLE_FIELD = "name";

export const DataSourceTitle = (record: TDataSource): string => {
  return record.name?.toString() || String(record.id);
};
