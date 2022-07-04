import { ChangeEvent, useEffect, useState } from 'react';
import styles from './greeting.module.css';

/* eslint-disable-next-line */
export interface GreetingProps {
  intialValue?: string;
}

export function Greeting(props: GreetingProps) {
  const intial = props.intialValue || '';
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const [name, setName] = useState<string | undefined>(
    () => window.localStorage.getItem('name') || intial
  );

  useEffect(() => {
    window.localStorage.setItem('name', name as string);
    console.log('use effect', name);

    // const timer = setInterval(() => console.log('tick'), 1000);

    // return () => {
    //   console.log('tear down')
    //   clearInterval(timer);
    // };
  }, [name]);

  return (
    <form>
      <input onChange={changeHandler} value={name} />
      {name}
    </form>
  );
}

export default Greeting;
