import {Navigate, Outlet} from 'react-router-dom';

interface AuthGuardProps {
    isAuth: boolean;
}

export const AuthGuard = (props: AuthGuardProps) => {
  if(!props.isAuth) {
    return (<Navigate to="login"></Navigate>)
  }

  return <Outlet></Outlet>


};


