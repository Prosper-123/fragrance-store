import React from 'react';
import background from '../images/background.webp';

const Hero = () => {
  return <div style={styles.heroContainer}>Welcome to Sesaluxe Store</div>;
};

const styles = {
  heroContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    backgroundImage: `url(${background})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold'
  }
};

export default Hero;
