import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import feedbackRoutes from './routes/Feedback.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/feedback', feedbackRoutes);

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://shubhranshu:bY68BRR2ooyp4URs@cluster0.udogslx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
)
.then(() => {
  console.log('✅ Connected to MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB Connection Error:', err);
});
