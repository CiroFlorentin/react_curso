function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string) => `Hola ${name}`;

const message2 = greet2('Herrera');
const message = greet('Fernando');
console.log(message, message2);

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: 'ABC123',
    username: 'El_Papi1502',
  };
}
const getUser2 = () => ({ uid: 'ABC123', username: 'El_Papi1502' });

const user = getUser();
const user2 = getUser2();
console.log(user, user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

// myNumbers.forEach(function (value) {
//   console.log({ value });
// });
// myNumbers.forEach((value) => console.log({ value }));
myNumbers.forEach(console.log);
