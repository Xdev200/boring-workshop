import React from 'react';
import styles from './Header.module.css';
import { Brand, MobileNav } from './';
export const NavBar = () => {
  return (
    <>
      <nav id="navbar" className={styles.navbar}>
        <div className={styles.nav_wrapper}>
          <Brand name="THE BORING EDUCATION" />
          {/* Navbar Links */}
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
      </nav>
      <MobileNav />
    </>
  );
};
