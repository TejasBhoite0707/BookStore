import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white shadow-lg border-2 w-96 p-6 rounded-lg" id="ContactForm">
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Your Feedback Matters</h3>
          <Link to="/">
            <IoIosCloseCircleOutline className="text-2xl text-gray-500 hover:text-red-600 cursor-pointer transition duration-200" />
          </Link>     
        </div>

        <form className="space-y-4" action='https://formspree.io/f/mwpejrje' method='post' target='_blank'>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              name='name'
              placeholder="Enter your name" 
              className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 px-3 py-2 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
            name='email'
              type="text" 
              placeholder="Enter your Email" 
              className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 px-3 py-2 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Feedback</label>
            <textarea 
            name='message'
              placeholder="Enter your message" 
              className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 px-3 py-2 rounded-md w-full h-24 resize-none"
            ></textarea>
          </div>

          <input 
            type="submit" 
            value="Submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2 px-4 w-full cursor-pointer transition duration-200"
          />
        </form>
        
      </div>
    </div>
  );
}

export default Contact;
