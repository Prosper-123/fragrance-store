// src/components/Header.js
import React from 'react';

const Header = () => {
    return <div style={styles.headerContainer}>Free shipping for orders above 950</div>;
  };

const styles = {
  headerContainer: {
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
    padding: '10px',
    fontSize: '14px',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    borderBottom: '1px solid #ddd'
  }
};

export default Header;