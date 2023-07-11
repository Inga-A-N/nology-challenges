import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <NavLink to="/" className={style.link}>
        Home
      </NavLink>
      <NavLink to="/UsersPage" className={style.link}>
        Users
      </NavLink>
    </nav>
  );
};

export default NavBar;
