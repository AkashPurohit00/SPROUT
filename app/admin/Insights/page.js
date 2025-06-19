'use client';

import { useState } from 'react';
import { addInsight } from '@/app/admin/Insights/insightsService'; // Adjust the import path as needed

export default function AdminInsights() {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    thumbnail: '',
    cloudinaryId: '',
    pdfLink: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Add New Insight
          </h1>

          {message && (
            <div className={`p-4 rounded-md mb-6 ${
              message.includes('Error') 
                ? 'bg-red-100 text-red-700 border border-red-300' 
                : 'bg-green-100 text-green-700 border border-green-300'
            }`}>
              {message}
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white transition-colors duration-200`}
            >
              {loading ? 'Adding Insight...' : 'Add Insight'}
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