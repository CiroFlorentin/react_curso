import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemInCart {
  name: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { name: 'Nintendo Switch 2', quantity: 10 },
  { name: 'PS5', quantity: 2 },
  { name: 'Xbox One', quantity: 5 },
  { name: 'PC', quantity: 1 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {itemsInCart.map(
        (
          item //? SE PUEDE DESTRUCTURAR EL ITEM { name, quantity }
        ) => (
          <ItemCounter
            key={item.name}
            productName={item.name}
            quantity={item.quantity}
          />
        )
      )}

      {/* <ItemCounter productName='Nintendo Switch 2' quantity={10} />
      <ItemCounter productName='PS5' quantity={2} />
      <ItemCounter productName='Xbox One' quantity={5} /> */}
    </>
  );
}
