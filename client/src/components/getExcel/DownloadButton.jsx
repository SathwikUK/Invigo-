import React, { useState } from 'react';
import axios from 'axios';
import './DownloadButton.css';
import Sidebar from '../Dash/Sidebar';
import { useNavigate } from 'react-router-dom';

const DownloadButton = () => {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleDownload = async () => {
        const title = prompt("Enter the title for the file:");
        if (!title) {
            alert("Title is required to download the file.");
            return;
        }

        try {
            const response = await axios.get('http://localhost:5001/generate-excel', {
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${title}.xlsx`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading the Excel file', error);
        }
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpdate = async () => {
        if (!file) {
            alert('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:5001/upload-excel', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading the file', error);
        }
    };

    const handleNext = () => {
        navigate('/next-page');
    };

    return (
        <div>
            <Sidebar />
            <div className="button-container">
                <button className="download-button" onClick={handleDownload}>
                    Download Faculty Data
                </button>
                <input type="file" onChange={handleFileChange} />
                <button className="update-button" onClick={handleUpdate}>
                    Upload Details
                </button>
                <button className="next-button" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default DownloadButton;
