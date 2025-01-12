import React from 'react';

const Navbar = () => {
  return (
    <div style={styles.navbarContainer}>
      <div style={styles.leftSection}>
        <div style={styles.hamburger}>☰</div>
        <div style={styles.categories}>All Categories</div>
      </div>
      <div style={styles.menu}>
        <div>Shop All</div>
        <div>Men's</div>
        <div>Women's</div>
        <div>Fragrance Samples</div>
        <div>All Collections</div>
        <div>Clearance Sale</div>
      </div>
      <div style={styles.rightSection}>
        <div>Contact</div>
        <div>Login</div>
        <div>Track Order</div>
      </div>
    </div>
  );
};

const styles = {
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center'
  },
  hamburger: {
    fontSize: '24px',
    cursor: 'pointer'
  },
  categories: {
    marginLeft: '10px',
    fontSize: '14px',
    cursor: 'pointer'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  menu: {
    display: 'flex',
    gap: '20px',
    fontSize: '16px'
  },
  rightSection: {
    display: 'flex',
    gap: '20px',
    fontSize: '16px'
  }
};

export default Navbar;
