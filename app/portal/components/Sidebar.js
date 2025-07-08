'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Calendar } from 'lucide-react';
import { getMonthName, formatDate } from '../../../lib/portalUtils';

export default function Sidebar({ groupedPdfs = {}, onPdfSelect, selectedPdf }) {
  const [expandedYears, setExpandedYears] = useState({});
  const [expandedMonths, setExpandedMonths] = useState({});

  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const toggleMonth = (year, month) => {
    const key = `${year}-${month}`;
    setExpandedMonths(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePdfClick = (pdf) => {
    onPdfSelect(pdf);
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
          <FileText className="w-5 h-5 text-blue-600" />
          <span>Documents</span>
        </h2>
      </div>

      <div className="p-4 space-y-2">
        {Object.keys(groupedPdfs).length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>No documents available</p>
          </div>
        ) : (
          Object.entries(groupedPdfs).map(([year, months]) => (
            <div key={year} className="mb-2">
              {/* Year Header */}
              <button
                onClick={() => toggleYear(year)}
                className="w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
              >
                {expandedYears[year] ? (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-gray-900">{year}</span>
                <span className="text-sm text-gray-500 ml-auto">
                  ({Object.values(months).reduce((total, pdfs) => total + pdfs.length, 0)} docs)
                </span>
              </button>

              {/* Year Content */}
              {expandedYears[year] && (
                <div className="ml-4 mt-2 space-y-1">
                  {Object.entries(months).map(([month, pdfs]) => (
                    <div key={month}>
                      {/* Month Header */}
                      <button
                        onClick={() => toggleMonth(year, month)}
                        className="w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {expandedMonths[`${year}-${month}`] ? (
                          <ChevronDown className="w-3 h-3 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-3 h-3 text-gray-400" />
                        )}
                        <span className="text-sm font-medium text-gray-700">
                          {getMonthName(parseInt(month))}
                        </span>
                        <span className="text-xs text-gray-500 ml-auto">
                          ({pdfs.length})
                        </span>
                      </button>

                      {/* Month Content - PDFs */}
                      {expandedMonths[`${year}-${month}`] && (
                        <div className="ml-4 mt-1 space-y-1">
                          {pdfs.map((pdf) => (
                            <button
                              key={pdf.id}
                              onClick={() => handlePdfClick(pdf)}
                              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                selectedPdf?.id === pdf.id
                                  ? 'bg-blue-50 border-l-4 border-blue-500'
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              <div className="flex items-start space-x-2">
                                <FileText className={`w-4 h-4 mt-0.5 ${
                                  selectedPdf?.id === pdf.id ? 'text-blue-600' : 'text-gray-400'
                                }`} />
                                <div className="flex-1 min-w-0">
                                  <div className={`text-sm font-medium truncate ${
                                    selectedPdf?.id === pdf.id ? 'text-blue-900' : 'text-gray-900'
                                  }`}>
                                    {pdf.heading}
                                  </div>
                                  {pdf.subheading && (
                                    <div className="text-xs text-gray-500 truncate">
                                      {pdf.subheading}
                                    </div>
                                  )}
                                  <div className="text-xs text-gray-400 mt-1">
                                    {formatDate(pdf.date)}
                                  </div>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}