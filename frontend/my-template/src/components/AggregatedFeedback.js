// frontend/src/components/AggregatedFeedback.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AggregatedFeedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAggregatedFeedback = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/feedback/aggregated-feedback');

        setFeedbackData(response.data);
      } catch (err) {
        setError('Failed to fetch aggregated feedback. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchAggregatedFeedback();
  }, []);

  if (loading) return <div className="text-center p-8">Loading feedback data...</div>;

  return (
    <div className="aggregated-feedback-container w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Aggregated Feedback by Category</h2>

      {error && (
        <div className="mb-4 text-red-500">
          <p>{error}</p>
        </div>
      )}

      <div className="feedback-categories">
        {feedbackData.length > 0 ? (
          feedbackData.map((feedback) => (
            <div key={feedback._id} className="feedback-category mb-4">
              <h3 className="text-xl font-semibold">{feedback._id}</h3>
              <p>{feedback.count} feedback(s) received</p>
            </div>
          ))
        ) : (
          <p>No aggregated feedback available.</p>
        )}
      </div>
    </div>
  );
};

export default AggregatedFeedback;
