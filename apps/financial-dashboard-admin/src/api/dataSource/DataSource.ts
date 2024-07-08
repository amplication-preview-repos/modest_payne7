export type DataSource = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  url: string | null;
  periodicity?: "Option1" | null;
};
