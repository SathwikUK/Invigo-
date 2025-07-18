// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { toast, ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('fullname', res.data.fullname);
      toast.success('Login successful!');
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (err) {
      console.error(err);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="body">
      <section className="container">
        {/* Back to Home Button */}
        <button className="btn back-btn" onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
        <form className="form" onSubmit={submitHandler} autoComplete="off">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={changeHandler}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="large">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
      <ToastContainer
        className="custom-toast-container"
        style={{
          top: '490px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
        }}
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default Login;

