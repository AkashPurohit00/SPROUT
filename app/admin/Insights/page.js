'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { addInsight } from '@/lib/insightsService';
import { uploadPdfAndSaveDetails } from '@/lib/pdfService';
import Login from '@/app/admin/Insights/LoginForm';

export default function AdminInsights() {
  const { isAuthenticated, loading: authLoading, user, logout } = useAuth();

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    thumbnail: '',
    cloudinaryId: '',
    pdfLink: ''
  });

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfHeading, setPdfHeading] = useState('');
  const [pdfSubheading, setPdfSubheading] = useState('');
  const [pdfDate, setPdfDate] = useState('');
  const [pdfMessage, setPdfMessage] = useState('');
  const [pdfLoading, setPdfLoading] = useState(false);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subscriptionStart, setSubscriptionStart] = useState('');
  const [subscriptionEnd, setSubscriptionEnd] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [userAddSuccess, setUserAddSuccess] = useState('');

  const handleLogout = () => logout();

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
      if (!formData.title || !formData.subtitle || !formData.pdfLink) {
        throw new Error('Please fill in all required fields');
      }
      if (!formData.pdfLink.includes('drive.google.com')) {
        throw new Error('Please provide a valid Google Drive link');
      }
      await addInsight(formData);
      setMessage('Insight added successfully!');
      setFormData({ title: '', subtitle: '', thumbnail: '', cloudinaryId: '', pdfLink: '' });
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handlePdfUpload = async (e) => {
    e.preventDefault();
    if (!pdfFile || !pdfHeading || !pdfSubheading || !pdfDate) {
      setPdfMessage('Please fill all fields and select a PDF.');
      return;
    }
    setPdfLoading(true);
    setPdfMessage('');

    try {
      await uploadPdfAndSaveDetails(pdfFile, pdfHeading, pdfSubheading, pdfDate);
      setPdfMessage('PDF uploaded successfully!');
      setPdfFile(null);
      setPdfHeading('');
      setPdfSubheading('');
      setPdfDate('');
    } catch (error) {
      console.error(error);
      setPdfMessage('Error uploading PDF.');
    } finally {
      setPdfLoading(false);
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

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-gray-600">Loading...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        
        <div className="bg-white shadow rounded-lg p-4 mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Admin Panel</h1>
            <p className="text-sm text-gray-600">Welcome, {user?.username}</p>
          </div>
          <button onClick={handleLogout} className="px-4 py-2 text-sm bg-red-100 hover:bg-red-200 rounded">
            Logout
          </button>
        </div>

        {/* Add Insight Form */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Add New Insight</h2>
          {message && (
            <div className={`p-3 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="title" value={formData.title} onChange={handleInputChange} required placeholder="Title *" className="w-full p-2 border rounded" />
            <textarea name="subtitle" value={formData.subtitle} onChange={handleInputChange} required rows="3" placeholder="Subtitle/Description *" className="w-full p-2 border rounded" />
            <input type="text" name="cloudinaryId" value={formData.cloudinaryId} onChange={handleInputChange} placeholder="Cloudinary Public ID" className="w-full p-2 border rounded" />
            <input type="url" name="thumbnail" value={formData.thumbnail} onChange={handleInputChange} placeholder="Fallback Image URL" className="w-full p-2 border rounded" />
            <input type="url" name="pdfLink" value={formData.pdfLink} onChange={handleInputChange} required placeholder="Google Drive PDF Link *" className="w-full p-2 border rounded" />
            <button type="submit" disabled={loading} className={`w-full py-2 rounded text-white ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}>
              {loading ? 'Adding...' : 'Add Insight'}
            </button>
          </form>
        </div>

        {/* PDF Upload Form */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Upload PDF</h2>
          {pdfMessage && (
            <div className={`p-3 rounded ${pdfMessage.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {pdfMessage}
            </div>
          )}
          <form onSubmit={handlePdfUpload} className="space-y-4">
            <input type="file" accept="application/pdf" onChange={(e) => setPdfFile(e.target.files[0])} required className="w-full p-2 border rounded" />
            <input type="text" value={pdfHeading} onChange={(e) => setPdfHeading(e.target.value)} required placeholder="Heading *" className="w-full p-2 border rounded" />
            <input type="text" value={pdfSubheading} onChange={(e) => setPdfSubheading(e.target.value)} required placeholder="Subheading *" className="w-full p-2 border rounded" />
            <input type="date" value={pdfDate} onChange={(e) => setPdfDate(e.target.value)} required className="w-full p-2 border rounded" />
            <button type="submit" disabled={pdfLoading} className={`w-full py-2 rounded text-white ${pdfLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}>
              {pdfLoading ? 'Uploading...' : 'Upload PDF'}
            </button>
          </form>
        </div>

        {/* Add User Form */}
        <div className="bg-white p-6 rounded-lg shadow-xl space-y-4">
          <h2 className="text-xl font-bold mb-4">Add New User</h2>
          <form onSubmit={handleAddUser} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="border rounded-xl p-3 w-full" />
            <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required className="border rounded-xl p-3 w-full" />
            <input type="email" placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)} required className="border rounded-xl p-3 w-full" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="border rounded-xl p-3 w-full" />
            <input type="date" placeholder="Subscription Start" value={subscriptionStart} onChange={(e) => setSubscriptionStart(e.target.value)} required className="border rounded-xl p-3 w-full" />
            <input type="date" placeholder="Subscription End" value={subscriptionEnd} onChange={(e) => setSubscriptionEnd(e.target.value)} required className="border rounded-xl p-3 w-full" />
            <div className="md:col-span-2">
              <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 w-full transition">
                {loading ? 'Adding...' : 'Add User'}
              </button>
              {userAddSuccess && <p className="mt-4 text-green-600 font-semibold">{userAddSuccess}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
