import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './nextpage.css';

const NextPage = () => {
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchDates = async () => {
            try {
                const response = await axios.get('http://localhost:5001/get-dates');
                setDates(response.data.dates);
            } catch (error) {
                console.error('Error fetching dates', error);
            }
        };

        fetchDates();
    }, []);

    const handleDateChange = async (event) => {
        const date = event.target.value;
        setSelectedDate(date);

        try {
            const response = await axios.get(`http://localhost:5001/get-users?date=${date}`);
            setUsers(response.data.users);
        } catch (error) {
            console.error('Error fetching users', error);
        }
    };

    return (
        <div className="main-container">
            <div className="left-container">
                <h2>Select Date</h2>
                <select value={selectedDate} onChange={handleDateChange}>
                    <option value="" disabled>Select a date</option>
                    {dates.map((date, index) => (
                        <option key={index} value={date}>{date}</option>
                    ))}
                </select>
                <h2>Users</h2>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>{user.username}</li>
                    ))}
                </ul>
            </div>
            <div className="right-container">
                {/* Additional content can be added here */}
            </div>
        </div>
    );
};

export default NextPage;
