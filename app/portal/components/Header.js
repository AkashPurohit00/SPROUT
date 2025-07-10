'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, ChevronDown } from 'lucide-react';
import { useUserAuth } from '@/contexts/UserAuthContext';
import Avatar from '../../../Components/Avatar';

export default function Header({ user }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { logout } = useUserAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      window.history.replaceState(null, '', '/login');
      window.history.pushState(null, '', '/login');
      router.replace('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      router.replace('/login');
    }
  };

  return (
    <header className="bg-blue-200 shadow-sm border-b border-gray-200 px-5 py-3">
      <div className="flex items-center justify-between ">
        {/* Left - Welcome Message */}
        <div className="flex items-center space-x-4 px-5">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome to Sprout Research Portal
            </h1>
            <p className="text-sm text-gray-600">
              Access your documents securely and efficiently
            </p>
          </div>
        </div>

        {/* Right - Avatar & Info */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Avatar user={user} size="md" />
            <div className="text-left">
              <div className="font-semibold text-gray-900">
                {user?.fullName || 'Guest'}
              </div>
              <div className="text-sm text-gray-600">
                {user?.email || 'No email'}
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="font-semibold text-gray-900">
                  {user?.fullName || ''}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  {user?.email || 'No email'}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  {user?.panCardNumber || 'No Pan Number'}
                </div>
                {user?.phone && (
                  <div className="text-sm text-gray-600 mb-1">
                    📞 {user.phone}
                  </div>
                )}
                {user?.subscriptionEnd && (
                  <div className="text-sm text-gray-600">
                    ⏳ Expires on: {user.subscriptionEnd}
                  </div>
                )}
                {user?.kycVerifiedOn && (
                  <div className="text-sm text-gray-600">
                    ✅ KYC Verified on: {user.kycVerifiedOn}
                  </div>
                )}
              </div>

              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors text-red-600"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay to close dropdown on outside click */}
      {showDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowDropdown(false)}
        />
      )}
    </header>
  );
}
