import React from 'react';

function UserCard({ name, email, city }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>City: {city}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
};
export default UserCard