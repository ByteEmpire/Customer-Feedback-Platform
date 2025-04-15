import express from 'express';
import { submitFeedback, getAggregatedFeedback } from '../controllers/feedback.js';

const router = express.Router();

// POST route to submit feedback
router.post("/", submitFeedback);

// GET route to get aggregated feedback by category
router.get("/aggregated-feedback", getAggregatedFeedback);

export default router;
