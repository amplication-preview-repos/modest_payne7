export type FinancialData = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  value: number | null;
  source: string | null;
};
