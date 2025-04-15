// src/pages/ContactDetails.js

import React from 'react';

const ContactDetails = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Contact Details</h1>
        
        <div className="contact-info">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Name:</h2>
            <p className="text-lg text-gray-800">John Doe</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Email:</h2>
            <p className="text-lg text-gray-800">contact@company.com</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Phone:</h2>
            <p className="text-lg text-gray-800">(123) 456-7890</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Address:</h2>
            <p className="text-lg text-gray-800">
              123 Company Street, Suite 101, <br />
              Cityville, CA 90001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
