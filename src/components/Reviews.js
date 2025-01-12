import React from 'react';

const Reviews = () => {
  return (
    <div style={styles.reviewsContainer}>
      <h2 style={styles.sectionTitle}>Customer Reviews</h2>
      <div style={styles.reviewsList}>
        {reviews.map((review) => (
          <div key={review.id} style={styles.reviewCard}>
            <div style={styles.rating}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} style={styles.star}>★</span>
              ))}
            </div>
            <p style={styles.reviewText}>"{review.text}"</p>
            <p style={styles.reviewerName}>- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  reviewsContainer: {
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  reviewsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '20px',
  },
  reviewCard: {
    backgroundColor: '#fff',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  rating: {
    fontSize: '20px',
    color: '#FFD700', // Gold color for stars
    marginBottom: '10px',
  },
  star: {
    margin: '0 2px',
  },
  reviewText: {
    fontSize: '16px',
    fontStyle: 'italic',
    marginBottom: '10px',
  },
  reviewerName: {
    fontSize: '14px',
    color: '#555',
  },
};

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Amazing fragrance! Lasts all day and smells wonderful.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Very good, but I expected a little more floral scent.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Alex Johnson',
    text: 'I absolutely love it! The scent is perfect for evening wear.',
    rating: 5,
  },
];

export default Reviews;
