export interface Hero {
  id: number;
  name: string;
  owner: Owner;
}

// type Owner = 'DC' | 'Marvel'; //* Para valores literales
export enum Owner {
  DC = 'DC', //0 //'DC'
  Marvel = 'Marvel', //1 //'Marvel'
}
// Se exporta por export const heroes
// Y por default al final del archivo. export default heroes;
export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
  {
    id: 6,
    name: 'Green Lantern',
    owner: Owner.DC,
  },
];

export default heroes;
