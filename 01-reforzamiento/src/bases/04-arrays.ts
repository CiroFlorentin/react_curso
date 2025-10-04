const myArray: number[] = [1, 2, 3, 4, 5];

const myArray2 = [...myArray];
myArray2.push(7);
// myArray2.push('Hola Mundo')

console.log({ myArray, myArray2 });

// myArray.push(+'10');
// myArray.push(11);

// for (const myNumber of myArray) {
//   console.log(myNumber + 10);
// }
