interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address?: Address;
}
interface Address {
  postalCode: string;
  city: string;
}

const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: 'ABC123',
    city: 'New York',
  },
};

console.log(ironman);

// const spiderman = { ...ironman }; //! CLONA superficialmente
// const spiderman = structuredClone(ironman); //! CLONA profundamente

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 21;
// spiderman.address.city = 'San Francisco';

// console.log(superman,ironman);
