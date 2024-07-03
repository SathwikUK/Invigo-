import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        mobile: '',
        branch: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState(null); // State for error messages

    const navigate = useNavigate(); // Hook for navigation

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5001/register', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                console.log('Success:', response.data);
                alert('Registration successful! Please log in.');
                // Redirect to the login page after successful registration
                navigate('/login');
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data === 'User Already Registered') {
                setError('This email is already registered. Please use a different email.');
            } else {
                console.error('Error:', error);
                setError('An error occurred during registration. Please try again.');
            }
        }
    };

    return (
        <div>
            <section className="container">
                <h1 className='large text-primary'>Sign Up</h1>
                <p className='lead'><i className="fas fa-user-plus"></i> Create Your Account</p>
                {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
                <form className='form' onSubmit={handleSubmit} autoComplete='off'>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Full Name'
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='Email Address'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Mobile'
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Branch '
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder='Password'
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            minLength='6'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            minLength='6'
                            required
                        />
                    </div>
                    <input type='submit' className='btn btn-primary' value="Register" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </section>
        </div>
    );
}

export default Register;
