import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded);
    console.log("Changed user to:", decoded);
    navigate("/"); // Go to Home after switching account
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg text-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Change Profile</h2>
      <p className="text-gray-600 mb-6">
        Click below to log in with another Google account:
      </p>

      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
        ux_mode="popup"
        prompt="select_account"
      />
    </div>
  );
};

export default Profile;
