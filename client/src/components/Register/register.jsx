import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import profile from "../../img/profileimg.jpg";



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
      <h1 className="hclass">Create a new account</h1>
      <p className='hclass1'>Already have an account ?  <Link to="/Login" >Login here</Link></p>
      <form onSubmit={handleSubmit}>
      <div>
      <label className="profile-label">Profile Image:</label>
      <div className="profile-circle">
        <img src={profile}  alt="Profile" className='profile-img' />
      </div>
    </div>

      <div className="form-group1">
          <input type="file" name="profileImage" onChange={handleChange} required />
      </div>
       <table className="input-table">
        <tr>
          <td>
    
        <div className="form-group">
          <label className="input-label">Username:</label>
          <input type="text" className ="input-field" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          </td>
          <td>
    
        <div className="form-group">
          <label className="input-label">Phone Number:</label>
          <input type="tel" name="phoneNumber" className="input-field" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          </td>
          <td>
        
         <div className="form-group">
          <label className="input-label">Branch:</label>
          <select name="branch"  className="input-field" value={formData.branch} onChange={handleChange} required>
            <option value="">Choose branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
            <option value="CSE">CIVIL</option>
            <option value="ECE">IT</option>
            <option value="EEE">CSM</option>
            <option value="MECH">AIDS</option>
            <option value="CSE">AIML</option>
            
          </select>
          </div>
        </td>
        </tr>
        <tr>
          <td>
      
       
        <div className="form-group">
          <label className="input-label">Email:</label>
          <input type="email" name="email" className="input-field" value={formData.email} onChange={handleChange} required />
        </div>
        </td>
        <td>
        <div className="form-group">
          <label className="input-label">Password:</label>
          <input type="password" name="password" className="input-field" value={formData.password} onChange={handleChange} required />
        </div>
        </td>
        <td>
        <div className="form-group">
          <label className="input-label">Confirm Password:</label>
          <input type="password" name="confirmPassword" className="input-field" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        </td>
        </tr>
        </table>
        <center>
        <button type="submit">Register</button>
        </center>
      </form>
    </div>
  );
};

export default Register;