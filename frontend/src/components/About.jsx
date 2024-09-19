import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-pink-700">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">About Us</h1>
        <p className="text-lg text-white mb-6">
          Learn more about our mission and what we do.
        </p>
        
        <a
          href='https://tejasportfoliowebapp.netlify.app' target='_blank'
          className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
        >
          @Tejas Bhoite
        </a>
      </div>
    </div>
  );
}

export default About;
