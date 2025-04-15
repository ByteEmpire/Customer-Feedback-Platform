// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext"; // ✅ import your AuthContext
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId="267827231336-p3o2qe14ua3cind58udnacj88s2p8726.apps.googleusercontent.com">
    <AuthProvider> {/* ✅ Wrap App with AuthProvider */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthProvider>
  </GoogleOAuthProvider>
);
