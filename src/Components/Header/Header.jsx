import React from 'react';
import styles from './Header.module.css';
import { NavBar } from './';
export const Header = () => {
  return (
    <div className={styles.header_main}>
      <NavBar />
    </div>
  );
};
