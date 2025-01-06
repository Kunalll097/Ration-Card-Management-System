import React from 'react';
import RationAllocation from '../components/Dashboard/RationAllocation';
import ConsumptionHistory from '../components/Dashboard/ConsumptionHistory';
import Complaints from '../components/Dashboard/Complaints';

function Dashboard() {
    return (
        <div className="dashboard">
            <h1>User Dashboard</h1>
            <div>
                <RationAllocation />
                <ConsumptionHistory />
                <Complaints />
            </div>
        </div>
    );
}

export default Dashboard;
