import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navigation.module.css";
import routes from "../../routes";

const Navigation = () => {
  return (
    <ul className={s.list}>
      <li className={s.listItem}>
        <NavLink
          to={routes.home}
          exact
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li className={s.listItem}>
        <NavLink
          to={routes.movies}
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
