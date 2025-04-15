// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure to include all necessary paths
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#3182ce', // Custom blue color
          700: '#2b6cb0', // Darker shade for hover effects
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example of custom font family
      },
      backgroundImage: {
        'hero-pattern': "url('https://via.placeholder.com/1500')", // Set a default hero image if needed
      },
    },
  },
  plugins: [],
};
