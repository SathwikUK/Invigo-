import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StateContext } from './StateContext';
import Select from 'react-select';
import './AllocationPage.css';

const AllocationPage = () => {
    const { state, setState } = useContext(StateContext);
    const navigate = useNavigate();
    const { allocatedRooms, users, rooms } = state;

    const [isEditing, setIsEditing] = useState(false);
    const [currentEdit, setCurrentEdit] = useState(null);
    const [newRoom, setNewRoom] = useState(null);
    const [newUser, setNewUser] = useState(null);

    // Find unallocated users
    const allocatedUsernames = allocatedRooms.flatMap(allocation => allocation.users.map(user => user.username));
    const unallocatedUsers = users.filter(user => !allocatedUsernames.includes(user.username));

    // Find unallocated rooms
    const allocatedRoomNames = allocatedRooms.map(allocation => allocation.room);
    const unallocatedRooms = rooms.filter(room => !allocatedRoomNames.includes(room.room));

    const handleEdit = (allocation) => {
        setCurrentEdit(allocation);
        setNewRoom({ value: allocation.room, label: allocation.room });
        setNewUser(null);
        setIsEditing(true);
    };

    const handleUpdate = () => {
        const updatedAllocations = allocatedRooms.map(allocation => {
            if (allocation.room === currentEdit.room) {
                return {
                    room: newRoom.value,
                    users: newUser ? [{ username: newUser.value }] : allocation.users,
                };
            }
            return allocation;
        });

        setState({
            ...state,
            allocatedRooms: updatedAllocations,
        });

        setIsEditing(false);
        setCurrentEdit(null);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentEdit(null);
    };

    const roomOptions = unallocatedRooms.map(room => ({
        value: room.room,
        label: room.room,
    }));

    const userOptions = unallocatedUsers.map(user => ({
        value: user.username,
        label: user.username,
    }));

    return (
        <div className="allocation-page">
            <h1>Allocation Results</h1>
            {allocatedRooms.length > 0 ? (
                <table className="allocation-table">
                    <thead>
                        <tr>
                            <th>Room</th>
                            <th>Users</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allocatedRooms.map((allocation, index) => (
                            <tr key={index}>
                                <td>{allocation.room}</td>
                                <td>
                                    {allocation.users.map((user, idx) => (
                                        <span key={idx}>{user.username}{idx < allocation.users.length - 1 ? ', ' : ''}</span>
                                    ))}
                                </td>
                                <td>
                                    <button onClick={() => handleEdit(allocation)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No allocations made</p>
            )}

            <button onClick={() => navigate('/next-page')} className="back-button">Go Back</button>

            {isEditing && (
                <div className="edit-popup">
                    <div className="edit-popup-content">
                        <h3>Edit Allocation</h3>
                        <label>
                            Room:
                            <Select
                                value={newRoom}
                                onChange={setNewRoom}
                                options={roomOptions}
                                className="select-input"
                            />
                        </label>
                        <label>
                            User:
                            <Select
                                value={newUser}
                                onChange={setNewUser}
                                options={userOptions}
                                className="select-input"
                            />
                        </label>
                        <div className="edit-popup-buttons">
                            <button onClick={handleUpdate}>Update</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllocationPage;
