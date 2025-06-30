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
  // State for Add User Form
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subscriptionStart, setSubscriptionStart] = useState('');
  const [subscriptionEnd, setSubscriptionEnd] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [userAddSuccess, setUserAddSuccess] = useState('');

  const handleLogout = () => {
    logout();
  };
  

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


  const handleAddUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUserAddSuccess('');

    try {
      const response = await fetch('/admin/api/adduser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          password,
          subscriptionStart,
          subscriptionEnd
        })
      });

      if (response.ok) {
        setFullName('');
        setPhone('');
        setEmail('');
        setPassword('');
        setSubscriptionStart('');
        setSubscriptionEnd('');
        setUserAddSuccess('User added successfully!');
      } else {
        setUserAddSuccess('Error adding user.');
      }
    } catch (error) {
      console.error(error);
      setUserAddSuccess('Error adding user.');
    }

    setLoading(false);
  };

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



  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white shadow rounded-lg p-4 mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Admin Panel</h1>
            <p className="text-sm text-gray-600">Welcome, {user?.username}</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm bg-red-100 hover:bg-red-200 rounded"
          >
            Logout
          </button>
        </div>

        {/* Insights Form */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-bold mb-4">Add New Insight</h2>

          {message && (
            <div className={`p-3 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Title *"
              className="w-full p-2 border rounded"
            />
            <textarea
              name="subtitle"
              value={formData.subtitle}
              onChange={handleInputChange}
              required
              rows="3"
              placeholder="Subtitle/Description *"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="cloudinaryId"
              value={formData.cloudinaryId}
              onChange={handleInputChange}
              placeholder="Cloudinary Public ID"
              className="w-full p-2 border rounded"
            />
            <input
              type="url"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleInputChange}
              placeholder="Fallback Image URL"
              className="w-full p-2 border rounded"
            />
            <input
              type="url"
              name="pdfLink"
              value={formData.pdfLink}
              onChange={handleInputChange}
              required
              placeholder="Google Drive PDF Link *"
              className="w-full p-2 border rounded"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded text-white ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
              {loading ? 'Adding...' : 'Add Insight'}
            </button>
          </form>
        </div>
      </div>

      {/* Add User Section */}
      <div className="mt-10 max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>

        <form onSubmit={handleAddUser} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="border rounded-xl p-3 w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="border rounded-xl p-3 w-full"
          />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded-xl p-3 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border rounded-xl p-3 w-full"
          />
          <input
            type="date"
            placeholder="Subscription Start"
            value={subscriptionStart}
            onChange={(e) => setSubscriptionStart(e.target.value)}
            required
            className="border rounded-xl p-3 w-full"
          />
          <input
            type="date"
            placeholder="Subscription End"
            value={subscriptionEnd}
            onChange={(e) => setSubscriptionEnd(e.target.value)}
            required
            className="border rounded-xl p-3 w-full"
          />

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 w-full transition"
            >
              {loading ? 'Adding...' : 'Add User'}
            </button>

            {userAddSuccess && (
              <p className="mt-4 text-green-600 font-semibold">{userAddSuccess}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}