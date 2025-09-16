const totalInt = (arr: (string | number)[]): number => {
  return arr.filter((item) => !isNaN(Number(item)) && typeof item !== 'boolean').length;
};

console.log(totalInt(['b', 7, 'h', 6, 'h', 'k', 'i', 5, 'g', 7, 8]));
console.log(totalInt([7,'b',8,5,6,9,'n','f','y',6,9]));
console.log(totalInt(['u','h','b','n',7,6,5,1,'g',7,9]));