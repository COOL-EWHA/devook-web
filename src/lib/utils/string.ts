export const getQueryString = (params: Record<string, any> = {}) => {
  const filteredParams = Object.entries(params).filter(([_, value]) => value !== null && value !== undefined);
  return filteredParams.reduce((acc, curr, i) => {
    const [key, value] = curr;
    return acc.concat(`${i ? '&' : '?'}${key}=${value}`);
  }, '');
};
