// src/App.js
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import SearchNavbar from './components/SearchNavBar';
import Footer from './components/Footer';
import Reviews from './components/Reviews';

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif'
  }
};

const App = () => {
  return (
    <div style={styles.appContainer}>
      <Header />
      <SearchNavbar />
      <Navbar />
      <Hero />
      <ProductList />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;

