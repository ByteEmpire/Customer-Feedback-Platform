import Feedback from '../models/Feedback.js';

// Handle POST /api/feedback
export const submitFeedback = async (req, res) => {
  try {
    const { category, comments } = req.body; // Ensure you use "comments"

    const newFeedback = new Feedback({ category, comments });
    await newFeedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully.' });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ message: 'Server error while submitting feedback.' });
  }
};

// Handle GET /api/feedback
export const getAggregatedFeedback = async (req, res) => {
  try {
    // Aggregate feedback by category and count the number of feedbacks in each category
    const feedbackAggregation = await Feedback.aggregate([
      {
        $group: {
          _id: "$category",  // Group by category
          count: { $sum: 1 }, // Count the number of feedbacks in each category
        },
      },
    ]);

    res.status(200).json(feedbackAggregation); // Send the result as a response
  } catch (error) {
    console.error("Error fetching aggregated feedback:", error);
    res.status(500).json({ message: "Error fetching aggregated feedback" });
  }
};
