import { ChangeEvent, useState } from 'react';
import styles from './greeting.module.css';

/* eslint-disable-next-line */
export interface GreetingProps {
  intialValue?: string
}

export function Greeting(props: GreetingProps) {
  const intial = props.intialValue;
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const [name, setName] = useState<string | undefined>(intial);
  return (
    <form>
      <input onChange={changeHandler} value={name} />
      {name}
    </form>
  );
}

export default Greeting;
