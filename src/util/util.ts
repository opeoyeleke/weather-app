export const formatUnixTime = (timestamp: number): string => {
  const time = new Date(timestamp * 1000);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(time);

  return formattedTime;
};
