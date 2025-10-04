const characterName: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = characterName;

console.log({ p3 });

const returnsArrayFn = () => {
  return ['ABC', 123] as const;
};

const [letters, number] = returnsArrayFn();

console.log(letters, number);
