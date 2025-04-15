import React, { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";  // Import FeedbackList component
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, setUser } = useAuth();
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded);
    console.log("Logged in user:", decoded);
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleChangeProfile = () => {
    setUser(null); // Reset user to allow re-login
  };

  // Fetch feedbacks from backend
  useEffect(() => {
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

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/18512872/pexels-photo-18512872/free-photo-of-feedback.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-extrabold text-black mb-4">FeedbackFlow</h1>
        <p className="text-xl text-gray-700 mb-6">
          Welcome to our Customer Feedback Platform! Your opinions help us grow and improve.
        </p>

        {!user ? (
          <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
        ) : (
          <>
            <p className="text-gray-800 font-medium mb-1 text-lg">
              Welcome, <span className="font-bold">{user.name}</span>!
            </p>
            <p className="text-gray-600 mb-4">{user.email}</p>

            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
              <button
                onClick={handleChangeProfile}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Change Profile
              </button>
            </div>

            <FeedbackForm />
          </>
        )}

        {/* Display feedback list */}
        {loading ? (
          <p>Loading feedbacks...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <FeedbackList feedbacks={feedbacks} /> // Pass feedbacks to the FeedbackList component
        )}
      </div>
    </div>
  );
};

export default Home;
