import moment from "moment";
export const date = (date) => {
  return moment(date, "YYYY/MM/DD").format("Do MMM YY");
};
