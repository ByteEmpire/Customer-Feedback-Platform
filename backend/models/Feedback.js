import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['Product Features', 'Product Pricing', 'Product Usability'],
    required: true,
  },
  comments: {  // <-- this should be "comments" instead of "comment"
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback;
