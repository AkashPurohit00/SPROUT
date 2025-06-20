'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { getInsights, incrementViewCount } from '@/lib/insightsService';
import { getThumbnailUrl, getHeroImageUrl } from '@/lib/cloudinary';

const InsightCard = ({ insight, onReadMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex">
        {/* Thumbnail */}
        <div className="md:w-1/3 lg:w-1/4">
          <div className="relative h-64 md:h-full">
            <img
              src={insight.thumbnailUrl || insight.thumbnail}
              alt={insight.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x250/0066cc/ffffff?text=Insight+Image";
              }}
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="md:w-2/3 lg:w-3/4 p-6">
          {/* Brand/Logo placeholder */}
          <div className="flex items-center mb-3">
            <div className="text-sm text-gray-500 font-medium">
              SPROUT
              <br />
              PARTNERS
            </div>
          </div>
          
          {/* Date */}
          <div className="text-sm text-gray-600 mb-3">
            {insight.date}
          </div>
          
          {/* Main Heading */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
            {insight.title}
          </h2>
          
          {/* Sub Heading */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            {insight.subtitle}
          </p>
          
          {/* Bottom Section */}
          <div className="flex items-center justify-between">
            {/* Read More Button */}
            <button
              onClick={() => onReadMore(insight)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Read More
            </button>
            
            {/* View Count */}
            <div className="text-sm text-gray-500">
              {insight.viewCount} Views
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoadingCard = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 animate-pulse">
    <div className="md:flex">
      <div className="md:w-1/3 lg:w-1/4">
        <div className="h-64 md:h-full bg-gray-300"></div>
      </div>
      <div className="md:w-2/3 lg:w-3/4 p-6">
        <div className="h-4 bg-gray-300 rounded mb-3 w-24"></div>
        <div className="h-4 bg-gray-300 rounded mb-3 w-20"></div>
        <div className="h-8 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-6 w-3/4"></div>
        <div className="flex justify-between items-center">
          <div className="h-10 bg-gray-300 rounded w-24"></div>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function InsightsPage() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch insights on component mount
  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true);
        const fetchedInsights = await getInsights();
        
        // Process insights to add optimized image URLs
        const processedInsights = fetchedInsights.map(insight => ({
          ...insight,
          thumbnailUrl: insight.cloudinaryId 
            ? getThumbnailUrl(insight.cloudinaryId)
            : insight.thumbnail,
          heroImageUrl: insight.cloudinaryId 
            ? getHeroImageUrl(insight.cloudinaryId)
            : insight.thumbnail
        }));
        
        setInsights(processedInsights);
      } catch (err) {
        console.error('Error fetching insights:', err);
        setError('Failed to load insights. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  const handleReadMore = async (insight) => {
    try {
      // Increment view count in database
      await incrementViewCount(insight.id);
      
      // Update local state
      setInsights(prevInsights =>
        prevInsights.map(item =>
          item.id === insight.id
            ? { ...item, viewCount: item.viewCount + 1 }
            : item
        )
      );

      // Open PDF link in new tab
      window.open(insight.pdfLink, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error handling read more:', error);
      // Still open the link even if view count update fails
      window.open(insight.pdfLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Featured Hero Section - Latest Insight */}
        {!loading && insights.length > 0 && (
          <div className="relative bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 overflow-hidden">
            {/* Background Pattern/Image */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/50 to-blue-200/50"></div>
              {/* Replace with your actual background image */}
              <div className="w-full h-full bg-cover bg-center" 
                   style={{
                     backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="%23a855f7" stroke-width="0.5" opacity="0.3"/></pattern></defs><rect width="1000" height="1000" fill="url(%23grid)"/></svg>')`
                   }}>
              </div>
            </div>
            
            <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content Side */}
                <div className="order-2 lg:order-1">
                  {/* Brand/Logo */}
                  <div className="flex items-center mb-4">
                    <div className="text-sm text-gray-600 font-medium tracking-wide">
                      SPROUT<br />PARTNERS
                    </div>
                  </div>
                  
                  {/* Date */}
                  <div className="text-sm text-gray-600 mb-4">
                    {insights[0].date}
                  </div>
                  
                  {/* Main Heading */}
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {insights[0].title}
                  </h1>
                  
                  {/* Sub Heading */}
                  <p className="text-gray-700 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                    {insights[0].subtitle}
                  </p>
                  
                  {/* Bottom Section */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {/* Read More Button */}
                    <button
                      onClick={() => handleReadMore(insights[0])}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-fit"
                    >
                      Read More
                    </button>
                    
                    {/* View Count */}
                    <div className="text-sm text-gray-600 font-medium">
                      {insights[0].viewCount} Views
                    </div>
                  </div>
                </div>
                
                {/* Image Side */}
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                      <Image
                        src={insights[0].heroImageUrl || insights[0].thumbnail}
                        alt={insights[0].title}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/800x500/0066cc/ffffff?text=Featured+Insight";
                        }}
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-200/50 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200/50 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Loading Hero Section */}
        {loading && (
          <div className="relative bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 overflow-hidden">
            <div className="container mx-auto px-4 py-12 lg:py-20">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 animate-pulse">
                  <div className="h-4 bg-gray-300 rounded mb-4 w-24"></div>
                  <div className="h-4 bg-gray-300 rounded mb-4 w-20"></div>
                  <div className="h-12 bg-gray-300 rounded mb-6"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-8 w-3/4"></div>
                  <div className="h-12 bg-gray-300 rounded w-32"></div>
                </div>
                <div className="order-1 lg:order-2 animate-pulse">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-300 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Other Insights Section */}
        <div className="container mx-auto px-4 py-12">
          {/* Section Header */}
          {!loading && insights.length > 1 && (
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                More Insights
              </h2>
              <p className="text-gray-600">
                Explore our previous analysis and market insights
              </p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
              >
                Retry
              </button>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="max-w-4xl mx-auto">
              {[1, 2, 3].map((i) => (
                <LoadingCard key={i} />
              ))}
            </div>
          )}

          {/* Insights List - Skip the first one since it's featured */}
          <div className="max-w-4xl mx-auto">
            {!loading && insights.length > 1 ? (
              insights.slice(1).map((insight) => (
                <InsightCard
                  key={insight.id}
                  insight={insight}
                  onReadMore={handleReadMore}
                />
              ))
            ) : !loading && insights.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No insights available at the moment.</p>
              </div>
            ) : null}
          </div>

          {/* Load More Button (for future pagination) */}
          {!loading && insights.length > 1 && (
            <div className="text-center mt-8">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-md font-medium transition-colors duration-200">
                Load More Insights
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}