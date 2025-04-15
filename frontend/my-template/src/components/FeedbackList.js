import React, { useEffect, useState } from 'react';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the feedback data from the backend
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('/api/feedbacks');
        if (!response.ok) {
          throw new Error('Failed to fetch feedbacks');
        }
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (loading) return <p>Loading feedbacks...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="feedback-list p-6">
      <h2 className="text-3xl font-semibold text-orange-700 mb-4">Customer Feedbacks</h2>
      {feedbacks.length === 0 ? (
        <p>No feedbacks available.</p>
      ) : (
        <ul>
          {feedbacks.map((feedback) => (
            <li key={feedback._id} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-md">
              <div className="text-xl font-semibold">{feedback.name}</div>
              <div className="text-sm text-gray-500">{feedback.email}</div>
              <div className="mt-2">{feedback.message}</div>
              <div className="mt-2 text-sm text-gray-400">
                Category: {feedback.category} | Date: {new Date(feedback.createdAt).toLocaleDateString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
