import React, { useState } from 'react';
// import '../../styles/Login.css'; 
function Login({ onLogin }) {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!credentials.email || !credentials.password) {
            setError('Email and password are required.');
            return;
        }

        if (credentials.email === 'test@example.com' && credentials.password === 'password123') {
            alert('Login Successful');
            onLogin(credentials.email); // Call parent handler with user email
            setCredentials({ email: '', password: '' });
            setError('');
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={(e) =>
                        setCredentials({ ...credentials, email: e.target.value })
                    }
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) =>
                        setCredentials({ ...credentials, password: e.target.value })
                    }
                    className="login-input"
                />
                {error && <p className="login-error">{error}</p>}
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default Login;
