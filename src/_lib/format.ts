export const formatString = (str: Array<string>) => {
  return str.map(item => item.trim().toLowerCase().replace(/\s+/g, '_'));
}