import moment from "dayjs";
import { toNumber } from "lodash";

export const toDisplayTime = (date: any) => {
  return date ? moment(date).format("hh:mm A") : "";
};

export const toDisplayDate = (date: any, format?: string) => {
  return date ? moment(date).format(format ?? "YYYY-MM-DD") : "";
};
