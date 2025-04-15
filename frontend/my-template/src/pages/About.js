import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-orange-800 mb-4 leading-tight">
            About FeedbackFlow
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            FeedbackFlow is a modern customer feedback platform designed to help businesses understand
            their users better. We believe that every opinion matters and strive to create a seamless,
            intuitive experience for customers to share their thoughts.
          </p>
        </div>

        {/* Our Mission and Vision Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          <div className="bg-orange-50 p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-orange-700 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              Our mission is to empower businesses to make data-driven decisions by providing valuable
              insights into customer experiences, needs, and preferences.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-orange-700 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">
              We envision a world where feedback is not just collected, but analyzed and acted upon, enabling
              businesses to continuously improve and exceed customer expectations.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-orange-700 mb-4">Join Us Today</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Become part of a community where your voice matters. Share your feedback and help us improve while
            enabling businesses to thrive and grow.
          </p>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Have any questions?{" "}
            <a
              href="/contact-us"
              className="text-orange-600 font-semibold hover:underline"
            >
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
