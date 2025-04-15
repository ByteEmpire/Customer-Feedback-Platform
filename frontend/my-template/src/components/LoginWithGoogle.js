// src/components/LoginWithGoogle.js
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useState } from "react";

const LoginWithGoogle = ({ onLogin }) => {
  const [user, setUser] = useState(null);

  return (
    <div className="flex justify-center my-6">
      {!user ? (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwt_decode(credentialResponse.credential);
            setUser(decoded);
            onLogin(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      ) : (
        <div className="text-center text-white">
          <p className="text-xl font-semibold">Welcome, {user.name}!</p>
          <img src={user.picture} alt="profile" className="w-16 h-16 rounded-full mt-2 mx-auto" />
        </div>
      )}
    </div>
  );
};

export default LoginWithGoogle;
