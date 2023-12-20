import moment from "moment";

const convertTimestampToDate = (tms: number) => {
  return formatDate(moment.unix(tms));
};

const formatDate = (date: any, format: string = "YYYY-MM-DD HH:mm A") => {
  return moment(date).format(format);
};

const today = () => {
  return moment().format();
};

export { convertTimestampToDate, formatDate, today };
