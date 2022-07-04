import { Link, NavLink } from 'react-router-dom';
import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <>
      {/* <Link to="/">Feed</Link>
      <Link to="/my-likes">My Likes</Link> */}

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles['active'] : '')}
      >
        Feed
      </NavLink>

      <NavLink
        to="/my-likes"
        className={({ isActive }) => (isActive ? styles['active'] : '')}
      >
        My Likes
      </NavLink>
    </>
  );
}

export default Header;
