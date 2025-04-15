import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data to the console (you can integrate backend later)
    console.log({ name, email, message });
    // Reset the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 p-6">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-orange-700 mb-8 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          We’d love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border rounded-lg border-gray-300 focus:ring-2 focus:ring-orange-500 transition duration-200"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border rounded-lg border-gray-300 focus:ring-2 focus:ring-orange-500 transition duration-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border rounded-lg border-gray-300 focus:ring-2 focus:ring-orange-500 transition duration-200"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
