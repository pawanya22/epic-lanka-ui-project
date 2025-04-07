import React, { useState } from 'react';

// Login Page Component
const LoginPage = ({ onNavigate }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.loginCard}>
        <h2 style={styles.heading}>Welcome Back to Veloce</h2>
        <h5>We are excited to have your back. Log in now and access your account.</h5>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
        
            <input
              type="text"
              style={styles.input}
              placeholder="Email"
            />
          </div>
          <div style={styles.inputGroup}>
            
            <input
              type="password"
              style={styles.input}
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            style={styles.button}
            onClick={() => onNavigate('register')}
          >
            Login
          </button>
        </form>
        <div style={styles.links}>
          <a href="#" style={styles.link}>Forgot Password?</a>
          <p style={styles.signup}>
            Don't have an account? <button onClick={() => onNavigate('register')} style={styles.link}></button>
          </p>
        </div>
      </div>
    </div>
  );
};

// Register Page Component
const RegisterPage = ({ onNavigate }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.loginCard}>
        <h2 style={styles.heading}>Register</h2>
        <h5>Sign up now to join the Veloce family.</h5>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            
            <input
              type="text"
              style={styles.input}
              placeholder="Name"
            />
          </div>
          <div style={styles.inputGroup}>
            
            <input
              type="email"
              style={styles.input}
              placeholder="Email Address"
            />
          </div>
          <div style={styles.inputGroup}>
            
            <input
              type="password"
              style={styles.input}
              placeholder="Password"
            />
          </div>
          <div style={styles.inputGroup}>
            
            <input
              type="password"
              style={styles.input}
              placeholder="Confirm password"
            />
          </div>
          <button
            type="button"
            style={styles.button}
            onClick={() => onNavigate('login')}
          >
            Register
          </button>
        </form>
        <div style={styles.links}>
          <p style={styles.signup}>
            Already have an account? <button onClick={() => onNavigate('login')} style={styles.link}>Log In</button>
          </p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('login'); // Initial page is 'login'

  // Navigate between login and register pages
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'login' ? (
        <LoginPage onNavigate={handleNavigate} />
      ) : (
        <RegisterPage onNavigate={handleNavigate} />
      )}
    </div>
  );
};

// Styling
const styles = {
  wrapper: {
    minHeight: '100vh',
    width: '100vw',
    backgroundImage: 'url("https://img.freepik.com/free-vector/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.jpg?uid=R111615214&ga=GA1.1.1547780330.1706756246&w=740")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '100px', // Increased from 50px to 100px
    boxSizing: 'border-box',
  },
  loginCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '40px',
    borderRadius: '15px',
    width: '400px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    color: '#fff',
    marginRight: '50px', // Added marginRight to move the card further right
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2rem',
    fontWeight: '600',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '25px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '6px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
  },
  button: {
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    backgroundImage: 'linear-gradient(to right, #F6B8FD, #316AD7)',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '15px',
  },
  links: {
    marginTop: '20px',
    textAlign: 'center',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  signup: {
    marginTop: '15px',
    fontSize: '0.9rem',
  }
};

export default App;
