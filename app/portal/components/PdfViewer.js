'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, Plus, Minus, Shield } from 'lucide-react';
import {
  preventContextMenu,
  preventKeyboardShortcuts,
} from '../../../lib/portalUtils';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PdfViewer({ pdf, user }) {
  const containerRef = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2); // default zoom

  const options = useMemo(() => ({
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  }), []);

  useEffect(() => {
    if (containerRef.current) {
      preventContextMenu(containerRef.current);
      preventKeyboardShortcuts(containerRef.current);
      containerRef.current.style.userSelect = 'none';
    }
  }, []);

  useEffect(() => {
    // Reset page and zoom when document changes
    setPageNumber(1);
    setScale(0.5);
  }, [pdf]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  if (!pdf) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-lg text-gray-600">Select a document to view</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white" ref={containerRef}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{pdf.heading}</h2>
          <p className="text-sm text-gray-600">{pdf.subheading}</p>
        </div>

        <div className="flex items-center flex-wrap gap-3">
          {/* Navigation & Zoom */}
          <button
            onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
            className="p-2 border rounded hover:bg-gray-100"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-sm text-gray-700">
            Page {pageNumber} of {numPages}
          </span>
          <button
            onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
            className="p-2 border rounded hover:bg-gray-100"
          >
            <ChevronRight size={18} />
          </button>

          <div className="mx-2 border-l h-5" />

          <button
            onClick={() => setScale(prev => Math.min(prev + 0.2, 3))}
            className="p-2 border rounded hover:bg-gray-100"
          >
            <Plus size={18} />
          </button>
          <button
            onClick={() => setScale(prev => Math.max(prev - 0.2, 0.6))}
            className="p-2 border rounded hover:bg-gray-100"
          >
            <Minus size={18} />
          </button>

          <div className="flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700">Protected</span>
          </div>
        </div>
      </div>

      {/* PDF Viewer Area */}
      <div className="relative flex-1 overflow-hidden bg-gray-50 p-4">
        {/* Watermarks */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Center watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-5xl font-bold text-gray-800 rotate-30 text-center whitespace-nowrap">
              {user?.email || 'CONFIDENTIAL'} <br />
              {user?.phone || ''}
            </div>
          </div>

          {/* Top-left badge */}
          <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-xs px-2 py-1 rounded shadow">
            CONFIDENTIAL <br />
            DO NOT SHARE
          </div>

          {/* Top-right badge */}
          <div className="absolute top-4 right-4 z-20 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow">
            {user?.fullName} <br />
            {user?.email} <br />
            {user?.phone}
          </div>

          {/* Bottom-right timestamp */}
          <div className="absolute bottom-4 right-4 text-xs text-gray-700 opacity-80 bg-white px-2 py-1 rounded shadow">
            {new Date().toLocaleString()}
          </div>
        </div>

        {/* PDF Document */}
        <div className="flex justify-center items-start h-[80vh] overflow-auto">
          <Document
            file={pdf.pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            loading={<div>Loading PDF...</div>}
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>
      </div>
    </div>
  );
}
