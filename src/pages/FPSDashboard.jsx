import React, { useState, useEffect } from 'react';
import { fetchFPSStock } from '../../api/Api';

function FPSDashboard() {
    const [fpsStock, setFpsStock] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getFPSStock = async () => {
            setLoading(true);
            try {
                const response = await fetchFPSStock(); // API call
                setFpsStock(response);
            } catch (err) {
                setError('Error fetching FPS stock');
            } finally {
                setLoading(false);
            }
        };

        getFPSStock();
    }, []);

    if (loading) {
        return <div>Loading FPS stock...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="fps-dashboard">
            <h1>FPS Stock Dashboard</h1>
            <table className="fps-stock-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Stock</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {fpsStock.map((stock, index) => (
                        <tr key={index}>
                            <td>{stock.itemName}</td>
                            <td>{stock.quantity}</td>
                            <td>{stock.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FPSDashboard;
