import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

export const Brand = (props) => {
  return (
    <div className={styles.logo}>
      {/* Logo Placeholder */}
      <a href="#home">{props.name}</a>
    </div>
  );
};

Brand.PropTypes = {
  name: PropTypes.string
};
