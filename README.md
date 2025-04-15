# 💬 FeedbackFlow

**FeedbackFlow** is a user-friendly full-stack web application where customers can share feedback on product features, pricing, and usability. The app uses Google OAuth for secure login and displays both individual and aggregated feedback insights.

---

## 🚀 Features

- 🔐 Google OAuth Login using `@react-oauth/google`
- 📝 Submit categorized feedback (Product Features, Pricing, Usability)
- 📋 View all user feedback
- 📊 View aggregated feedback statistics
- 🌐 Fully responsive UI with Tailwind CSS
- 🧠 Auth state managed using React Context API

---

## 🛠 Tech Stack

**Frontend:**
- React
- Tailwind CSS
- React Router
- Google OAuth (`@react-oauth/google`)
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv, CORS

---

## 📁 Project Structure

feedbackflow/ ├── backend/ │ ├── models/ │ │ └── Feedback.js │ ├── routes/ │ │ └── feedbackRoutes.js │ ├── controllers/ │ │ └── feedbackController.js │ ├── server.js │ └── .env ├── frontend/ │ ├── public/ │ └── src/ │ ├── components/ │ │ ├── FeedbackForm.js │ │ ├── FeedbackList.js │ │ ├── AggregatedFeedback.js │ ├── pages/ │ │ ├── Home.js │ │ ├── Profile.js │ │ ├── ContactUs.js │ │ └── About.js │ ├── context/ │ │ └── AuthContext.js │ ├── App.js │ └── main.jsx └── README.md


---

## ⚙️ Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/feedbackflow.git
cd feedbackflow
cd backend
npm install
PORT=5000
MONGO_URI=your_mongodb_connection_string
npm start
cd ../frontend
npm install
<GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
npm run dev
