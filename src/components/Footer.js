import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.footerSection}>
        <h3 style={styles.sectionTitle}>Contact Us</h3>
        <p>123 Fragrance St, Scent City</p>
        <p>Email: contact@Sesaluxe.com</p>
        <p>Phone: +44 45697890</p>
      </div>
      <div style={styles.footerSection}>
        <h3 style={styles.sectionTitle}>Quick Links</h3>
        <ul style={styles.list}>
          <li><a href="/" style={styles.link}>Home</a></li>
          <li><a href="/shop" style={styles.link}>Shop</a></li>
          <li><a href="/about" style={styles.link}>About Us</a></li>
          <li><a href="/contact" style={styles.link}>Contact</a></li>
        </ul>
      </div>
      <div style={styles.footerSection}>
        <h3 style={styles.sectionTitle}>Follow Us</h3>
        <div style={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>Twitter</a>
        </div>
      </div>
      <div style={styles.footerSection}>
        <h3 style={styles.sectionTitle}>Subscribe to Our Newsletter</h3>
        <form style={styles.newsletterForm}>
          <input type="email" placeholder="Enter your email" style={styles.emailInput} />
          <button type="submit" style={styles.subscribeButton}>Subscribe</button>
        </form>
      </div>
      <div style={styles.footerBottom}>
        <p>&copy; 2025 Sesaluxe Store. All rights reserved.</p>
      </div>
    </div>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    textAlign: 'left',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '8px',
    display: 'block',
  },
  socialIcons: {
    display: 'flex',
    flexDirection: 'column',
  },
  socialIcon: {
    color: '#fff',
    marginBottom: '8px',
    textDecoration: 'none',
  },
  newsletterForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  emailInput: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  subscribeButton: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  footerBottom: {
    gridColumn: 'span 4',
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
  }
};

export default Footer;
