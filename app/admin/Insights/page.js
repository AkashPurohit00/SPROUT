// app/admin/insights/page.js
'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { addInsight } from '@/lib/insightsService';
import Login from '@/app/admin/Insights/LoginForm'; // Adjust the import path as needed

export default function AdminInsights() {
  const { isAuthenticated, loading: authLoading, user, logout } = useAuth();
  
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    thumbnail: '',
    cloudinaryId: '',
    pdfLink: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!isAuthenticated) {
    return <Login />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Validate required fields
      if (!formData.title || !formData.subtitle || !formData.pdfLink) {
        throw new Error('Please fill in all required fields');
      }

      // Validate PDF link (should be Google Drive link)
      if (!formData.pdfLink.includes('drive.google.com')) {
        throw new Error('Please provide a valid Google Drive link');
      }

      await addInsight(formData);
      setMessage('Insight added successfully!');
      
      // Reset form
      setFormData({
        title: '',
        subtitle: '',
        thumbnail: '',
        cloudinaryId: '',
        pdfLink: ''
      });
    } catch (error) {
      console.error('Error adding insight:', error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header with user info and logout */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Admin Panel</h1>
            <p className="text-sm text-gray-600">Welcome back, {user?.username}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Add New Insight
          </h2>

          {message && (
            <div className={`p-4 rounded-md mb-6 ${
              message.includes('Error') 
                ? 'bg-red-100 text-red-700 border border-red-300' 
                : 'bg-green-100 text-green-700 border border-green-300'
            }`}>
              <div className="flex items-center">
                {message.includes('Error') ? (
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
                {message}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter insight title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subtitle *
              </label>
              <textarea
                name="subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter insight subtitle/description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cloudinary Image ID (Recommended)
              </label>
              <input
                type="text"
                name="cloudinaryId"
                value={formData.cloudinaryId}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter Cloudinary public ID"
              />
              <p className="text-sm text-gray-500 mt-1">
                Upload your image to Cloudinary and enter the public ID here for optimized loading
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fallback Image URL
              </label>
              <input
                type="url"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter fallback image URL"
              />
              <p className="text-sm text-gray-500 mt-1">
                This will be used if Cloudinary ID is not provided
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                PDF Link (Google Drive) *
              </label>
              <input
                type="url"
                name="pdfLink"
                value={formData.pdfLink}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="https://drive.google.com/file/d/..."
              />
              <p className="text-sm text-gray-500 mt-1">
                Make sure the Google Drive link is publicly accessible
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-md font-medium ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              } text-white transition-colors duration-200`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding Insight...
                </div>
              ) : (
                'Add Insight'
              )}
            </button>
          </form>

          <div className="mt-8 p-4 bg-gray-100 rounded-md">
            <h3 className="font-medium text-gray-900 mb-2">Instructions:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Upload images to Cloudinary and use the public ID for best performance</li>
              <li>• Make sure Google Drive PDFs are set to "Anyone with the link can view"</li>
              <li>• All insights will appear in chronological order (newest first)</li>
              <li>• View counts will automatically update when users click "Read More"</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}