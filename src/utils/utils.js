export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const convertUTCToNormalDateTime = (dateTimeString) => {
  const dateObj = new Date(dateTimeString);
  const timeZoneOffset = dateObj.getTimezoneOffset() / 60;
  dateObj.setHours(dateObj.getHours() - timeZoneOffset);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDateTime = dateObj.toLocaleString("en-US", options);
  return formattedDateTime;
};
