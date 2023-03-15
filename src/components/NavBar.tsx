import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

import styles from "styles/NavBar.module.css";
import logo from "imgs/logo.svg";
import cartIcon from "imgs/icon-cart.svg";
import usrAvt from "imgs/image-avatar.png";
import { navigationLinks } from "types";

const navLinks: navigationLinks = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "Men", to: "men" },
  { id: 3, name: "Women", to: "women" },
  { id: 4, name: "About", to: "about" },
  { id: 5, name: "Contact", to: "contact" },
];

const NavBar = () => {
  return (
    <nav className={clsx(styles.navContainer)}>
      <Link to={"/"} className={clsx(styles.navLogo)}>
        <img src={logo} alt="store-logo" />
      </Link>
      <ul className={clsx(styles.navLinks)}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              className={({ isActive, isPending }) =>
                clsx(styles.navLink, {
                  [styles.active]: isActive ? true : false,
                  [styles.pending]: isPending ? true : false,
                })
              }
              to={link.to}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={clsx(styles.navActions)}>
        <div className={clsx(styles.actionCart)}>
          <img src={cartIcon} alt="cart-icon" />
          <span>10</span>
        </div>
        <div className={clsx(styles.actionAvatar)}>
          <img src={usrAvt} alt="user-avt" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
