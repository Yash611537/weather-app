import React, { useState } from 'react';

function Login() {
  const [showLogin, setShowLogin] = useState(true); // State to toggle between login and signup

  const toggleForms = () => {
    setShowLogin(!showLogin); // Toggle the state
  };

  return (
    <div style={styles.container}>
      {showLogin ? (
        <div style={styles.formContainer}>
          <h2 style={styles.header}>Login</h2>
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button style={styles.button}>Login</button>
          <p style={styles.toggleText}>
            Don’t have an account?{' '}
            <span onClick={toggleForms} style={styles.clickableText}>
              Sign Up
            </span>
          </p>
        </div>
      ) : (
        <div style={styles.formContainer}>
          <h2 style={styles.header}>Sign Up</h2>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button style={styles.button}>Sign Up</button>
          <p style={styles.toggleText}>
            Already have an account?{' '}
            <span onClick={toggleForms} style={styles.clickableText}>
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',

    backgroundSize: 'cover',
    padding: '20px',
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with low opacity
    paddingLeft: '30px',
    paddingRight:'30px',
    paddingTop: '50px',
    paddingBottom: '50px',
    borderRadius: '10px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '330px',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease-in-out',
  },
  header: {
    marginBottom: '20px',
    fontSize: '24px', // Adjust font size
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid white', // Set border to white for contrast
    backgroundColor: 'transparent', // Transparent background
    color: 'white', // White text color
    fontSize: '16px',
    outline: 'none', // Remove the default input focus outline
  },
  'input::placeholder': {
    color: 'rgba(255, 255, 255, 0.7)', // White placeholder with 70% opacity
    fontStyle: 'italic', // Optional: make the placeholder text italic
  },
  button: {
    padding: '10px',
    width: '100%',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
  toggleText: {
    marginTop: '15px',
  },
  clickableText: {
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  // Media Queries for Mobile Responsiveness
  '@media (max-width: 768px)': {
    formContainer: {
      width: '90%', // Reduce the form width on mobile
    },
    header: {
      fontSize: '20px', // Smaller header text on mobile
    },
    input: {
      padding: '8px', // Smaller input padding on mobile
    },
    button: {
      padding: '8px', // Smaller button on mobile
      fontSize: '14px',
    },
  },
};

export default Login;
