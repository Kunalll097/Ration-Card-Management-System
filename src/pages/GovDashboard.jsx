// src/components/Dashboard/GovDashboard.jsx

import React, { useState, useEffect } from 'react';
import { fetchSystemReports } from '../api/Api'; // Correctly import the function

function GovDashboard() {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getSystemReports = async () => {
            setLoading(true);
            try {
                const response = await fetchSystemReports(); // Call the API function to fetch reports
                setReports(response); // Assuming the response contains an array of reports
            } catch (err) {
                setError('Error fetching system reports');
            } finally {
                setLoading(false);
            }
        };

        getSystemReports();
    }, []);

    if (loading) {
        return <div>Loading system reports...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="gov-dashboard">
            <h1>Government Dashboard</h1>
            <table className="system-reports-table">
                <thead>
                    <tr>
                        <th>Report ID</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report, index) => (
                        <tr key={index}>
                            <td>{report.id}</td>
                            <td>{report.title}</td>
                            <td>{report.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GovDashboard;
