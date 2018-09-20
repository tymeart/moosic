export const listify = (array) => {
  let list = `${array[0].name}`;
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      list += `, ${array[i].name}`
    }
  }
  return list;
}