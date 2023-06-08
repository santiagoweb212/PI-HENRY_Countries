import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import imgPlanet from "../../assets/planet-earth.png";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.containerLogoTitle}>
        <div className={styles.containerImg}>
          <img src={imgPlanet} alt="" className={styles.img} />
        </div>
        <h1 className={styles.h1Navbar}>Data world</h1>
      </div>
      <ul className={open ? styles.ulNavbarActive : styles.ulNavbar}>
        <li className={styles.liNavbar}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.linkNavbar
            }
            onClick={open && toggleClick}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.liNavbar}>
          <NavLink
            to={"/create-activity"}
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.linkNavbar
            }
            onClick={open && toggleClick}
          >
            Create Activity
          </NavLink>
        </li>
      </ul>
      <div
        className={`${styles["nav-icon-5"]} ${open ? styles.open : ""}`}
        onClick={toggleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
