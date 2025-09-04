const myArray: number[] = [1, 2, 3, 4]
const myArray2 = structuredClone(myArray)
myArray2.push(5)
console.log(myArray);
console.log(myArray2);

