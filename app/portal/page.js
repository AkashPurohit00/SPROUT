'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '@/contexts/UserAuthContext'; // Use the same context
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import dynamic from 'next/dynamic';
import { getAllPdfs } from '../../lib/pdfService';
import { groupPdfsByYearAndMonth, setupAutoLogout, setupTabCloseLogout } from '../../lib/portalUtils';

const PdfViewer = dynamic(() => import('./components/PdfViewer'), {
  ssr: false
});

export default function PortalPage() {
  const { user, isAuthenticated, logout } = useUserAuth(); // Use context instead
  const [pdfs, setPdfs] = useState([]);
  const [groupedPdfs, setGroupedPdfs] = useState({});
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Authentication check
  // In your portal page.js
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace('/login');
      return;
    }
  }, [isAuthenticated, loading, router]);

  


  // Add this useEffect to your portal page
  useEffect(() => {
    // Replace current history entry to prevent back navigation
    window.history.replaceState(null, '', '/portal');
    
    // Handle back button
    const handlePopState = (event) => {
      if (!isAuthenticated) {
        window.history.replaceState(null, '', '/login');
        router.replace('/login');
        return;
      }
      // If authenticated, stay on portal
      window.history.pushState(null, '', '/portal');
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isAuthenticated, router]);

  // Load PDFs
  useEffect(() => {
    const loadPdfs = async () => {
      try {
        setLoading(true);
        const allPdfs = await getAllPdfs();
        setPdfs(allPdfs);
        setGroupedPdfs(groupPdfsByYearAndMonth(allPdfs));
      } catch (err) {
        setError('Failed to load documents');
        console.error('Error loading PDFs:', err);
      } finally {
        setLoading(false);
      }
    };

   
      loadPdfs();

  }, [user]);

  // Security: Disable developer tools
  useEffect(() => {
    // Disable F12, Ctrl+Shift+I, etc.
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable text selection
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable drag
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    // Disable print
    window.addEventListener('beforeprint', (e) => {
      e.preventDefault();
      alert('Printing is not allowed');
      return false;
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  // Handle PDF selection
  const handlePdfSelect = (pdf) => {
    setSelectedPdf(pdf);
  };

  // Show loading state
  if (loading && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portal...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header user={user} />
      
      {/* Main Content */}
      <div className="flex h-screen "> {/* pt-20 to account for fixed header */}
        {/* Sidebar */}
        <Sidebar
          groupedPdfs={groupedPdfs}
          onPdfSelect={handlePdfSelect}
          selectedPdf={selectedPdf}
        />
        
        {/* PDF Viewer */}
        <PdfViewer
          pdf={selectedPdf}
          user={user}
        />
      </div>
      
      {/* Loading overlay for PDF operations */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading documents...</p>
          </div>
        </div>
      )}
    </div>
  );
}