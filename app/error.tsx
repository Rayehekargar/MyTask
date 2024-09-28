'use client'
import React from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;  
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold text-red-600">Something went wrong!</h1>
    <p className="mt-2 text-red-500">{error.message}</p>
    <button 
      onClick={() => reset()} 
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      Try Again
    </button>
  </div>
  );
};

export default ErrorPage;
