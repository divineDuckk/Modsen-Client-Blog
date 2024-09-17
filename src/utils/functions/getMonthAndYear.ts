export const getMonthAndYear = (date: string) => {
  const parts = date.split(" ");

  const month = parts[0];
  const remains = `${parts[1]} ${parts[2]}`;
  return { month, remains };
};
