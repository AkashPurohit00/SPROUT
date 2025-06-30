// app/login/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '@/contexts/UserAuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login, verifyOTP } = useUserAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('login'); // 'login' or 'otp'
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('error'); // 'error' or 'success'
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const result = await login(email, password);

      if (result.success) {
        setPhone(result.data.phone);
        setUserId(result.data.userId);
        setStep('otp');
        setMessage('OTP sent to your registered mobile number.');
        setMessageType('success');
      } else {
        setMessage(result.message || 'Login failed');
        setMessageType('error');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const result = await verifyOTP(phone, otp);

      if (result.success) {
        setMessage('Login successful! Redirecting...');
        setMessageType('success');
        setTimeout(() => {
          router.push('/portal');
        }, 1500);
      } else {
        setMessage(result.message || 'OTP verification failed');
        setMessageType('error');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => {
    setStep('login');
    setOtp('');
    setMessage('');
    setPhone('');
    setUserId('');
  };

  const resendOTP = async () => {
    setLoading(true);
    setMessage('');

    try {
      const result = await login(email, password);
      if (result.success) {
        setMessage('OTP resent successfully!');
        setMessageType('success');
      } else {
        setMessage('Failed to resend OTP. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Failed to resend OTP. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {step === 'login' ? 'Portal Login' : 'Verify OTP'}
        </h2>

        {message && (
          <div className={`mb-4 p-3 rounded text-sm border ${
            messageType === 'success' 
              ? 'text-green-700 bg-green-100 border-green-300' 
              : 'text-red-700 bg-red-100 border-red-300'
          }`}>
            {message}
          </div>
        )}

        {step === 'login' && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Login'}
            </button>
          </form>
        )}

        {step === 'otp' && (
          <>
            <div className="mb-4 p-4 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">
                OTP sent to: <span className="font-medium">{phone}</span>
              </p>
            </div>

            <form onSubmit={handleOtpVerify} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  placeholder="Enter 6-digit OTP"
                  maxLength="6"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center text-lg tracking-wider"
                />
              </div>

              <button
                type="submit"
                disabled={loading || otp.length !== 6}
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition disabled:opacity-50"
              >
                {loading ? 'Verifying...' : 'Verify OTP'}
              </button>
            </form>

            <div className="mt-4 flex justify-between">
              <button
                onClick={handleBackToLogin}
                disabled={loading}
                className="text-gray-600 hover:text-gray-800 text-sm"
              >
                ← Back to Login
              </button>
              
              <button
                onClick={resendOTP}
                disabled={loading}
                className="text-indigo-600 hover:text-indigo-800 text-sm"
              >
                Resend OTP
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}