import React from "react";
import sadCat from "../../images/cat.jpg";
import { Link } from "react-router-dom";
import s from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={s.section}>
      <img className={s.img} src={sadCat} alt="sad cat" />
      <p>
        Something went wrong. Let`s choose <Link to="/">MOVIE</Link> once more
      </p>
    </div>
  );
};

export default NotFound;
