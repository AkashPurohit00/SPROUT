// app/api/search-stocks/route.js
import { NextResponse } from 'next/server';
import yahooFinance from 'yahoo-finance2';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    
    if (!query) {
      return NextResponse.json(
        { success: false, error: 'Search query is required' },
        { status: 400 }
      );
    }

    // Search for stocks
    const searchResults = await yahooFinance.search(query, {
      quotesCount: 10,
      newsCount: 0,
    });

    // Filter for Indian stocks (NSE/BSE) and format results
    const indianStocks = searchResults.quotes
      .filter(stock => {
        const symbol = stock.symbol || '';
        const exchange = stock.exchange || '';
        
        // Filter for Indian exchanges
        return exchange.includes('NSI') || 
               exchange.includes('BSE') || 
               symbol.includes('.NS') || 
               symbol.includes('.BO') ||
               exchange === 'NSE' ||
               exchange === 'BSE';
      })
      .map(stock => ({
        symbol: stock.symbol,
        shortName: stock.shortname || stock.longname,
        longName: stock.longname,
        exchange: stock.exchange,
        regularMarketPrice: stock.regularMarketPrice,
        currency: stock.currency || 'INR'
      }));

    // If no Indian stocks found, try to get basic info for the search term
    if (indianStocks.length === 0) {
      try {
        // Try adding .NS (NSE) suffix if not present
        const searchSymbol = query.toUpperCase().includes('.NS') ? 
          query.toUpperCase() : 
          `${query.toUpperCase()}.NS`;
        
        const quote = await yahooFinance.quote(searchSymbol);
        
        if (quote) {
          indianStocks.push({
            symbol: quote.symbol,
            shortName: quote.shortName || quote.longName,
            longName: quote.longName,
            exchange: quote.fullExchangeName || 'NSE',
            regularMarketPrice: quote.regularMarketPrice,
            currency: quote.currency || 'INR'
          });
        }
      } catch (error) {
        // If NSE doesn't work, try BSE (.BO)
        try {
          const searchSymbolBSE = query.toUpperCase().includes('.BO') ? 
            query.toUpperCase() : 
            `${query.toUpperCase()}.BO`;
          
          const quoteBSE = await yahooFinance.quote(searchSymbolBSE);
          
          if (quoteBSE) {
            indianStocks.push({
              symbol: quoteBSE.symbol,
              shortName: quoteBSE.shortName || quoteBSE.longName,
              longName: quoteBSE.longName,
              exchange: quoteBSE.fullExchangeName || 'BSE',
              regularMarketPrice: quoteBSE.regularMarketPrice,
              currency: quoteBSE.currency || 'INR'
            });
          }
        } catch (bseError) {
          console.log('Stock not found in BSE either');
        }
      }
    }

    return NextResponse.json({
      success: true,
      results: indianStocks,
      total: indianStocks.length
    });

  } catch (error) {
    console.error('Stock search error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to search stocks' },
      { status: 500 }
    );
  }
}