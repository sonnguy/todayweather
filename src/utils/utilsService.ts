const sortArrayByDate = (source: any[], field: string) => {
  return source.sort(
    (a, b) => new Date(b[field]).getTime() - new Date(a[field]).getTime()
  );
};

export { sortArrayByDate };
