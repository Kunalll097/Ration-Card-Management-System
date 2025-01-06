import React, { useState } from 'react';
// import '../../styles/FeedbackForm.css'; 

function FeedbackForm() {
    const [feedback, setFeedback] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (feedback.trim() === '') {
            setError('Feedback cannot be empty.');
            return;
        }

        console.log('User feedback:', feedback);
        alert('Thank you for your feedback!');
        setFeedback('');
        setError('');
    };

    return (
        <div className="feedback-form-container">
            <h2>We value your feedback</h2>
            <form onSubmit={handleSubmit} className="feedback-form">
                <textarea
                    className="feedback-textarea"
                    placeholder="Your feedback here..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                />
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="feedback-submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FeedbackForm;
