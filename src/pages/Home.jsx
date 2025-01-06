import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for routing

function Home() {
    return (
        <div className="home">
            <h1>Welcome to the Ration Card Management System</h1>
            <p>Your gateway to track and manage your ration allocations and consumption history.</p>
            
            <div className="navigation">
                <h2>Quick Access</h2>
                <ul>
                    <li>
                        <Link to="/ration-allocation">View Ration Allocation</Link>
                    </li>
                    <li>
                        <Link to="/consumption-history">View Consumption History</Link>
                    </li>
                    <li>
                        <Link to="/feedback">Provide Feedback</Link>
                    </li>
                </ul>
            </div>

            <div className="overview">
                <h2>Current Status</h2>
                <p>Your ration allocation and consumption details are available in the respective sections.</p>
            </div>
        </div>
    );
}

export default Home;
