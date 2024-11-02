import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', { email, password });
            const data = response.data;

            if (data.token) {
                localStorage.setItem('token', data.token);
                alert('Login successful!');
                navigate('/dashboard');
            } else {
                alert('Invalid login credentials');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert(error.response?.data?.error || 'An error occurred during login.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-3xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
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
                    Login
                </button>
            </form>
        </div>
    );
}