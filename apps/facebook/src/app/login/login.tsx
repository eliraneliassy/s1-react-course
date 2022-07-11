import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../store/app.context';
import styles from './login.module.css';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const [email, setEmail] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [emailTouched, setEmailTouched] = useState<boolean>(false);

  const ctx = useContext(AppContext);
  const navigate = useNavigate();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (email.length > 0) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
    ctx.setIsAuth(true);
    navigate('/');
    

  };
  return (
    <div>
      <form>
        <div>
          <label>Email:</label>
          <input
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            required
          ></input>
          {!emailValid && emailTouched && <div style={{ color: 'red' }}>Email is required</div>}
        </div>

        <div>
          <label>Password:</label>
          <input type="password" placeholder="Password"></input>
        </div>

        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
