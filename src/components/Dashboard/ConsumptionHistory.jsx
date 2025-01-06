import React, { useState, useEffect } from 'react';
import { fetchConsumptionHistory } from '../../api/Api'; // API call to fetch consumption history
// import '../../styles/ConsumptionHistory.css';

function ConsumptionHistory({ userId }) {
    const [consumptionData, setConsumptionData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getConsumptionHistory = async () => {
            setLoading(true);
            setError('');
            try {
                // Pass userId to the API call for fetching specific user data
                const response = await fetchConsumptionHistory(userId);
                setConsumptionData(response);
            } catch (err) {
                setError('Failed to load consumption history. Please try again.');
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            getConsumptionHistory();
        } else {
            setError('User ID is missing. Unable to fetch data.');
        }
    }, [userId]);

    if (loading) {
        return <div className="loading">Loading consumption history...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="consumption-history">
            <h1>Consumption History</h1>

            {consumptionData.length === 0 ? (
                <p>No consumption history available.</p>
            ) : (
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Item</th>
                            <th>Fair Price Shop</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consumptionData.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.date}</td>
                                <td>{entry.quantity}</td>
                                <td>{entry.item}</td>
                                <td>{entry.fpsName}</td>
                                <td>{entry.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ConsumptionHistory;
