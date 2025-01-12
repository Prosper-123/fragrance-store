import React from 'react';

const SearchNavbar = () => {
  return (
    <div style={styles.navbarContainer}>
      <div style={styles.logo}>Sesaluxe</div>
      <input
        style={styles.searchBar}
        type="text"
        placeholder="Search Products..."
      />
      <div style={styles.icons}>
        <div style={styles.signIn}>📱 Sign In</div>
        <div>🛒 Cart</div>
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
  logo: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  searchBar: {
    flex: 1,
    margin: '0 20px',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '5px'
  },
  icons: {
    display: 'flex',
    gap: '15px',
    fontSize: '18px',
    alignItems: 'center'
  },
  signIn: {
    fontSize: '16px',
    fontWeight: 'normal',
    cursor: 'pointer'
  }
};

export default SearchNavbar;
