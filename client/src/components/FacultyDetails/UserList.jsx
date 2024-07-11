import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';
import Sidebar from '../Dash/Sidebar';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false); // Add a loading state

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true); // Set loading to true when fetching data
      try {
        const response = await axios.get('http://localhost:5001/faculty');
        setUsers(response.data); // Assuming response.data is an array of user objects
      } catch (error) {
        console.error('Error fetching users:', error);
        // Handle error states as needed
      } finally {
        setLoading(false); // Set loading to false when data is fetched or error occurs
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const getImageSrc = (user) => {
    if (user.profileImage && user.profileImage.data && user.profileImage.contentType) {
      // Convert binary data to base64 string
      const base64String = btoa(
        new Uint8Array(user.profileImage.data.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      return `data:${user.profileImage.contentType};base64,${base64String}`;
    } else {
      return ''; // Return empty string if no valid image data
    }
  };

  const filteredUsers = users.filter((user) => {
    const fullName = user.fullname.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    return fullName.includes(searchTermLower);
  });

  return (
    <>
    <Sidebar/>
    <div className="user-list-container">
      {loading? (
        <div className="loader">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <div className="search-bar">
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by name"
            />
          </div>
          <h2>Faculty</h2>
          <div className="user-cards">
            {filteredUsers.map((user) => (
              <div key={user._id} className="user-card">
                <div className="image-container">
                  {user.profileImage && user.profileImage.data? (
                    <img src={getImageSrc(user)} alt={user.fullname} />
                  ) : (
                    <span>No Image Available</span>
                  )}
                </div>
                <div className="details">
                  <h3>{user.fullname}</h3>
                  <p>Mobile: {user.mobile}</p>
                  <p>Branch: {user.branch}</p>
                  <p>Email: {user.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default UserList;