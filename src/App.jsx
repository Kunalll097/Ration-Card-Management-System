import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import RationAllocation from './components/Dashboard/RationAllocation';
import ConsumptionHistory from './components/Dashboard/ConsumptionHistory';
import Feedback from './components/FeedbackForm';  

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header */}
        <header className="app-header">
          <h1>Application Header</h1>
        </header>

        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Routes for Dashboard */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="ration-allocation" element={<RationAllocation />} />
              <Route path="consumption-history" element={<ConsumptionHistory />} />
              <Route path="feedback" element={<Feedback />} />
            </Route>

            {/* 404 Fallback Route */}
            <Route
              path="*"
              element={
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <h1>404 - Page Not Found</h1>
                  <p>The page you are looking for does not exist.</p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
