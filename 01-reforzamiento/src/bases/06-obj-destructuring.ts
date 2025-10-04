const person = {
  name: 'Alice',
  age: 30,
  key: 'Iroman',
};

// const name = person.name;
// const age = person.age;
// const key = person.key;

//? Destructuring
const { name, age, key } = person;
console.log({ name, age, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}
const useContext = (hero: Hero) => {
  const { name, age, key, rank = 'Sin rango' } = hero;
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
  };
};

const {
  rank,
  keyName,
  //   user: { name: nameHero },
  user,
} = useContext(person);
const { name: nameHero } = user;
console.log({ rank, keyName, nameHero });
