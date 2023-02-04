import React from 'react';
import styles from './Header.module.css';

export const MobileNav = () => {
  return (
    <div className={styles.mobile_nav_main}>
      {/* Menu Icon  */}
      <div className={styles.menuIcon}>
        <span className={`${styles.icon} ${styles.icon_bars}`}></span>
        <span className={`${styles.icon} ${styles.icon_bars} ${styles.overlay}`}></span>
      </div>

      <div className={styles.overlay_menu}>
        <ul id="menu" className={styles.menu}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
