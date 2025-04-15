import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Profile from "./pages/Profile"; // Import the Profile page
import Navbar from "./components/Navbar";
import AggregatedFeedback from './components/AggregatedFeedback';
import ContactDetails from "./pages/ContactDetails";  // Import the new ContactDetails page

function App() {
  const [user, setUser] = useState(null); // Manage the user state

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile setUser={setUser} />} /> {/* Profile page route */}
        <Route path="/aggregated-feedback" element={<AggregatedFeedback />} />
        <Route path="/contact-details" element={<ContactDetails />} /> {/* New Contact Details route */}
      </Routes>
    </Router>
  );
}

export default App;
