import React, { useState } from 'react';
import { fileComplaint } from '../../api/Api';

function Complaints() {
    const [complaint, setComplaint] = useState('');
    const [file, setFile] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!complaint.trim()) {
            setErrorMessage('Complaint description cannot be empty.');
            return;
        }

        const formData = new FormData();
        formData.append('complaint', complaint);
        if (file) {
            formData.append('file', file);
        }

        try {
            await fileComplaint(formData); // API call to submit complaint
            setSuccessMessage('Complaint submitted successfully!');
            setErrorMessage('');
            setComplaint('');
            setFile(null);
        } catch (error) {
            console.error('Error submitting complaint:', error);
            setErrorMessage('Failed to submit the complaint. Please try again.');
        }
    };

    return (
        <div>
            <h2>Submit a Complaint</h2>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea
                        placeholder="Describe your issue..."
                        value={complaint}
                        onChange={(e) => setComplaint(e.target.value)}
                        rows="4"
                        style={{ width: '100%' }}
                    />
                </div>
                <div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <button type="submit">Submit Complaint</button>
            </form>
        </div>
    );
}

export default Complaints;
