import clsx from "clsx";

import styles from "styles/NavBar.module.css";
import logo from "imgs/logo.svg";
import cartIcon from "imgs/icon-cart.svg";
import usrAvt from "imgs/image-avatar.png";

const NavBar = () => {
  return (
    <nav className={clsx(styles.navContainer)}>
      <a className={clsx(styles.navLogo)}>
        <img src={logo} alt="store-logo" />
      </a>
      <ul className={clsx(styles.navLinks)}>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
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
