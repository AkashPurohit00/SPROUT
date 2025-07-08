'use client';

import { useEffect, useRef } from 'react';
import { FileText, Shield } from 'lucide-react';
import { preventContextMenu, preventKeyboardShortcuts } from '../../../lib/portalUtils';

export default function PdfViewer({ pdf, user }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      preventContextMenu(containerRef.current);
      preventKeyboardShortcuts(containerRef.current);
      containerRef.current.style.userSelect = 'none';
    }
  }, []);

  if (!pdf) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Document Selected</h3>
          <p className="text-gray-600">Select a document from the sidebar to view it here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white" ref={containerRef}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{pdf.heading}</h2>
          <p className="text-sm text-gray-600">{pdf.subheading}</p>
        </div>
        <div className="flex items-center space-x-2 p-2 bg-blue-50 border border-blue-200 rounded-lg">
          <Shield className="w-5 h-5 text-blue-600" />
          <span className="text-sm text-blue-700">This document is protected and watermarked.</span>
        </div>
      </div>

      {/* PDF Section */}
      <div className="relative flex-1 overflow-hidden">
        {/* Watermarks strictly inside PDF view */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Center watermark text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-5xl font-bold text-shadow-black rotate-30 whitespace-nowrap">
              {user?.email || 'CONFIDENTIAL'} <br/>
              {user?.phone || ''}
            </div>
          </div>

          {/* Top-right watermark badge */}
          <div className="absolute top-4 left-4 text-xs font-semibold text-white bg-red-600 px-2 py-1 rounded shadow z-20">
            CONFIDENTIAL<br/>
            DO NOT SHARE 
          </div>

          {/* Top-left  watermark badge */}
          <div className="absolute top-4 right-4 text-xs font-semibold text-white bg-gray-700 px-2 py-1 rounded shadow z-20">
            {user?.fullName } <br/>
            {user?.email || ''} <br/>
            {user?.phone || ''}
          </div>

          {/* Bottom-right time badge */}
          <div className="absolute bottom-4 right-4 text-xs text-gray-800 opacity-70 bg-white px-2 py-1 rounded">
            {new Date().toLocaleString()}
          </div>
        </div>

        {/* PDF iframe */}
        <iframe
          src={`${pdf.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
          title="PDF Viewer"
          className="w-full h-[90vh] overflow-auto"
          style={{
            border: 'none',
            zIndex: 5,
            position: 'relative'
          }}
        />
      </div>
    </div>
  );
}
