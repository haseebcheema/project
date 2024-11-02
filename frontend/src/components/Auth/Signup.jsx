import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/register', { name, email, password });
            alert(response.data.message);
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);
            alert(error.response?.data?.error || 'An error occurred during registration.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                    required
                    className="mb-4 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="mb-4 p-2 border border-gray-300 rounded w-full"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    className="mb-4 p-2 border border-gray-300 rounded w-full"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Sign Up
                </button>
            </form>
        </div>
    );
}
