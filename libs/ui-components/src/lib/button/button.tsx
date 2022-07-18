import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  text: string;
  click: () => void;
  backgroundColor: string;
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.click}
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.text}
    </button>
  );
}

export default Button;
