import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form validation and submission here
    console.log('Submitted Values:');
    console.log('Username:', formData.username);
    console.log('Password:', formData.password);
    console.log('Message:', formData.message);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-600">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <div className="relative">
              <input
                type="text"
                id="username"
                name="username"
                placeholder='Enter username'
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
              />
              <AiOutlineUser className="absolute top-3 right-3 text-gray-400" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                placeholder='Enter password'
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
              />
              <AiOutlineLock className="absolute top-3 right-3 text-gray-400" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder='Enter Message'
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
              />
            </div>
          </div>
          <Link to="/signin">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-purple-600 transition duration-300 focus:outline-none"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
