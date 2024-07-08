import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FinancialDataWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
  source?: StringNullableFilter;
};
