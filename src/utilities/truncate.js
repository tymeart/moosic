export const truncate = (string) => {
  if (string.length > 34) {
    let newStr = string.substring(0, 33);
    if (newStr[newStr.length - 1] === ' ') {
      return newStr.slice(0, 34) + '...';
    } else {
      return newStr + '...';
    }
  }
  return string;
}