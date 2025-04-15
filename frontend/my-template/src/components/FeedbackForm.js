import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [category, setCategory] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category && comments) {
      try {
        // Sending feedback data to backend
        const response = await axios.post("http://localhost:5000/api/feedback", {
          category,
          comments,  // Ensure "comments" is sent
        });
  
        console.log(response.data);
        setCategory('');
        setComments('');
        setSubmitted(true);
        setError('');
      } catch (err) {
        setError("Failed to submit feedback. Please try again.");
      }
    } else {
      setError("Please fill in all fields.");
    }
  };
  

  return (
    <div className="feedback-form-container w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Submit Your Feedback</h2>
      {submitted && (
        <div className="mb-4 text-green-500">
          <p>Thank you for your feedback!</p>
        </div>
      )}
      {error && (
        <div className="mb-4 text-red-500">
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Category Selection */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-lg mb-2">Choose a category:</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">-- Select Category --</option>
            <option value="Product Features">Product Features</option>
            <option value="Product Pricing">Product Pricing</option>
            <option value="Product Usability">Product Usability</option>
          </select>
        </div>

        {/* Comments Section */}
        <div className="mb-4">
          <label htmlFor="comments" className="block text-lg mb-2">Your Comments:</label>
          <textarea
            id="comments"
            value={comments}
            onChange={handleCommentsChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your feedback here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
