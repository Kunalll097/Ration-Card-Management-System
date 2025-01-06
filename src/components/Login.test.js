import { render, fireEvent, screen } from '@testing-library/react';
import Login from './Login';

test('renders login form and handles input and validation', () => {
    const mockOnLogin = jest.fn(); // Mock function to handle login success
    render(<Login onLogin={mockOnLogin} />);

    // Get elements
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Login');

    // Initial state: no error
    expect(screen.queryByText('Email and password are required.')).not.toBeInTheDocument();

    // Simulate missing input and submit
    fireEvent.click(loginButton);
    expect(screen.getByText('Email and password are required.')).toBeInTheDocument();

    // Enter valid input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Simulate successful login
    fireEvent.click(loginButton);
    expect(mockOnLogin).toHaveBeenCalledWith('test@example.com'); // Check callback
    expect(screen.queryByText('Email and password are required.')).not.toBeInTheDocument();
});
