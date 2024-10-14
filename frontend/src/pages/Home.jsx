import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Application</h1>
            <p className="text-lg mb-8">Please login or signup to continue.</p>
            <div>
                <Link to="/login">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
                        Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    </>
  )
}
