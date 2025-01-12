import React from 'react';

const ProductList = () => {
  return (
    <div style={styles.productListContainer}>
      <h2 style={styles.sectionTitle}>New Fragrances</h2>
      <div style={styles.productGrid}>
        {products.map(product => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>K {product.price}</p>
            <button style={styles.addToCartButton}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  productListContainer: {
    padding: '20px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    padding: '20px',
  },
  productCard: {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'center',
    boxSizing: 'border-box',
    borderRadius: '8px',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
  addToCartButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontWeight: 'bold',
    marginTop: '10px',
  }
};

const products = [
  {
    id: 1,
    name: 'Fragrance 1',
    description: 'A fresh, floral scent perfect for all-day wear.',
    price: '1000',
    image: 'path/to/image1.jpg', 
  },
  {
    id: 2,
    name: 'Fragrance 2',
    description: 'A rich and spicy fragrance with hints of vanilla.',
    price: '1200',
    image: 'path/to/image2.jpg', 
  },
  {
    id: 3,
    name: 'Fragrance 3',
    description: 'An invigorating fragrance with citrus notes.',
    price: '1500',
    image: 'path/to/image3.jpg', 
  },
  {
    id: 4,
    name: 'Fragrance 4',
    description: 'A warm and sensual fragrance for evenings out.',
    price: '1800',
    image: 'path/to/image4.jpg', 
  }
];

export default ProductList;
