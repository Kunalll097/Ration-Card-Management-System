import React, { useState, useEffect } from 'react';
import { fetchRationAllocation } from '../../api/Api';

function RationAllocation({ userId }) {
    const [rationData, setRationData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getRationData = async () => {
            setLoading(true);
            setError('');
            try {
                const data = await fetchRationAllocation(userId); // API call
                setRationData(data);
            } catch (error) {
                setError('Failed to load ration allocation. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            getRationData();
        } else {
            setError('User ID is missing. Unable to fetch data.');
        }
    }, [userId]);

    if (loading) {
        return <div className="loading">Loading ration allocation...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="ration-allocation">
            <h1>Ration Allocation</h1>
            {rationData ? (
                <div className="ration-details">
                    <h2>Monthly Quota</h2>
                    <table className="allocation-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Allocated Quantity</th>
                                <th>Utilized</th>
                                <th>Remaining</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rationData.items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.allocated}</td>
                                    <td>{item.utilized}</td>
                                    <td>{item.remaining}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No ration allocation data available.</p>
            )}
        </div>
    );
}

export default RationAllocation;
