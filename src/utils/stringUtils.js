export const capitalize = (str) => {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
};

export const truncate = (str, limit) => {
  return str.slice(0, limit) + "...";
};

export const formatPrice = (total) => {
  return `$${Number(total).toFixed(2)}`;
};

export const formatDate = (isoDate) => {
  return new Date(isoDate).toLocaleString("en-AU", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
