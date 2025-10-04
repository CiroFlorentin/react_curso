import { useState } from 'react';

// import './ItemCounter.css';
import styles from './ItemCounter.module.css';

interface Props {
  productName: string;
  quantity?: number;
}

export const ItemCounter = ({ productName, quantity = 1 }: Props) => {
  // HOOKS
  const [count, setCount] = useState(quantity);

  // METHODS
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleRemove = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  //   RENDER
  return (
    <section className={styles.itemRow}>
      <span
        className={styles.itemText}
        style={{ color: count === 0 ? 'red' : 'black' }}
      >
        {productName}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleRemove}>-1</button>
    </section>
  );
};
