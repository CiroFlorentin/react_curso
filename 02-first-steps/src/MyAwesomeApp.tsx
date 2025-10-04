import type { CSSProperties } from 'react';

const firstName = 'Fernando';
const lastName = 'Herrera';

const favoriteGames = ['Zelda', 'Mario', 'Metroid'];
const isActive = true;

const address = {
  street: '123 Main St',
  city: 'Somewhere',
  country: 'USA',
};

export const MyAwesomeApp = () => {
  const myStyle: CSSProperties = {
    backgroundColor: isActive ? 'green' : 'red',
    borderRadius: '8px',
    padding: 10,
  };

  return (
    <>
      <h1> {firstName} </h1>
      <h3> {lastName} </h3>
      <p> {favoriteGames.join(' , ')}</p>

      <h1>{isActive ? 'Online' : 'Offline'}</h1>
      <p style={myStyle}>{JSON.stringify(address)}</p>
    </>
  );
};

// export function MyAwesomeApp() {
//   return (
//     <>
//       <h1>Fernando</h1>
//       <h3>Herrera</h3>
//     </>
//   );
// }

// ! SE PUEDE HACER DE LAS DOS FORMAS
