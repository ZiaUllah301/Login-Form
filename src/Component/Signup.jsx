import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';


const Signup = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',

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

    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-500 to-blue-600">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96">
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <div className=' relative'>

                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder='Enter Username'
                                value={formData.username}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                            />
                            <AiOutlineUser className="absolute top-3 right-3 text-gray-400" />
                        </div>

                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className=' relative'>

                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='Enter Password'
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                            />
                            <AiOutlineLock className="absolute top-3 right-3 text-gray-400" />

                        </div>

                    </div>
                    <NavLink to="/Signup">

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-purple-600 transition duration-300 focus:outline-none"
                        >
                            Signup
                        </button>
                    </NavLink>

                </form>
            </div>
        </div>
    );
};

export default Signup;
