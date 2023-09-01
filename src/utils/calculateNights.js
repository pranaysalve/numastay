import moment from "moment";
export const calculateNights = (startDateString, endDateString) => {
  const startDate = moment(startDateString, "YYYY/MM/DD");
  const endDate = moment(endDateString, "YYYY/MM/DD");

  if (!startDate.isValid() || !endDate.isValid()) {
    return "Invalid date format";
  }

  const nights = endDate.diff(startDate, "days");
  return nights;
};
