export const getQueryString = (params: Record<string, any> = {}) => {
  const filteredParams = Object.entries(params).filter(
    ([_, value]) => value !== null && value !== undefined && value !== '' && (!Array.isArray(value) || value.length),
  );
  return filteredParams.reduce((acc, curr, i) => {
    const [key, value] = curr;
    const refinedValue = Array.isArray(value) ? value.join(',') : value;
    return acc.concat(`${i ? '&' : '?'}${key}=${refinedValue}`);
  }, '');
};
