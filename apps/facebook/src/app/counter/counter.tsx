import { count } from 'console';
import { useState } from 'react';
import styles from './counter.module.css';

/* eslint-disable-next-line */
export interface CounterProps {}

function useCounter(increment: number, intialValue: number) {
  const [counter, setCounter] = useState<number>(intialValue);

  const clickHanlder = () => {
    setCounter(counter + increment);
  };

  return { counter, clickHanlder };
}

export function Counter(props: CounterProps) {
  const { counter, clickHanlder } = useCounter(1, 0);
  return (
    <>
      <div className="counter">{counter}</div>
      <button onClick={clickHanlder}>+</button>
    </>
  );
}

export default Counter;
