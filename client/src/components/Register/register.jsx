// Register.jsx
import React, { useState } from 'react';
import axios from '../../api/axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import './register.css';
import profile from '../../img/profileimg.jpg';

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    mobile: '',
    branch: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'profileImage') {
      setFormData({ ...formData, profileImage: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, mobile, branch, email, password, confirmPassword, profileImage } = formData;
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    const data = new FormData();
    data.append('fullname', fullname);
    data.append('mobile', mobile);
    data.append('branch', branch);
    data.append('email', email);
    data.append('password', password);
    data.append('confirmPassword', confirmPassword);
    data.append('profileImage', profileImage);
    try {
      const response = await axios.post('/register', data);
      if (response.status === 200) {
        toast.success('Registered Successfully');
        setTimeout(() => navigate('/Login'), 2000);
      }
    } catch (error) {
      console.error('Registration Error:', error);
      if (error.response?.data?.message === 'User is already registered') {
        toast.error('User is already registered');
      } else {
        toast.error('Registration failed');
      }
    }
  };

  return (
    <div className="register-container">
      {/* Back to Home Button */}
      <button className="btn back-btn" onClick={() => navigate('/')}>  
        <FontAwesomeIcon icon={faArrowLeft} /> Home
      </button>

      <h1 className="hclass">Create a new account</h1>
      <p className="hclass1">
        Already have an account? <Link to="/Login">Login here</Link>
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label className="profile-label">Profile Image:</label>
          <div className="profile-circle">
            <img src={profile} alt="Profile" className="profile-img" />
          </div>
        </div>
        <div className="form-group1">
          <input type="file" name="profileImage" onChange={handleChange} required />
        </div>
        <table className="input-table">
          <tbody>
            <tr>
              <td>
                <div className="form-group">
                  <input
                    type="text"
                    className="input-field"
                    name="fullname"
                    placeholder="Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="tel"
                    name="mobile"
                    className="input-field"
                    placeholder="Phone Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <select
                    name="branch"
                    className="input-field"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose branch</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="MECH">MECH</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="IT">IT</option>
                    <option value="CSM">CSM</option>
                    <option value="AIDS">AIDS</option>
                    <option value="AIML">AIML</option>
                    <option value="CIC">CIC</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="input-field"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="input-field"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="input-field"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <center>
          <button type="submit">Register</button>
        </center>
      </form>

      <ToastContainer
        style={{
          position: 'absolute',
          top: '650px',
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

export default Register;

