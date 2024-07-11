import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    branch: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: null
  });

  const handleChange = (event) => {
    if (event.target.name === 'profileImage') {
      setFormData({ ...formData, profileImage: event.target.files[0] });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { username, phoneNumber, branch, email, password, confirmPassword, profileImage } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const data = new FormData();
    data.append('username', username);
    data.append('phoneNumber', phoneNumber);
    data.append('branch', branch);
    data.append('email', email);
    data.append('password', password);
    data.append('confirmPassword', confirmPassword);
    data.append('profileImage', profileImage);

    try {
      const response = await axios.post('http://localhost:5001/register', data);
      if (response.status === 200) {
        alert('Registered Successfully');
      }
    } catch (error) {
      console.error('Registration Error:', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h1>Create a New Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Branch:</label>
          <select name="branch" value={formData.branch} onChange={handleChange} required>
            <option value="">Choose branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
          </select>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Profile Image:</label>
          <input type="file" name="profileImage" onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;