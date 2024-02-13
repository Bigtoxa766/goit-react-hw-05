import clsx from 'clsx';
import css from './NavBar.module.css'
import { NavLink } from "react-router-dom"


const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};


export const NavBar = () => {
  return (
    <nav>
        <NavLink className={buildLinkClass} to={'/'}>Home</NavLink>
        <NavLink className={buildLinkClass} to={'/movie'}>Movie</NavLink>
      </nav>
  )
}