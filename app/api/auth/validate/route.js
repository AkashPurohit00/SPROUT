// app/api/auth/validate/route.js
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { adminDb } from '@/lib/firebaseAdmin';

export async function GET(request) {
  try {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json(
        { message: 'No token found' },
        { status: 401 }
      );
    }

    // Verify JWT token
    const secret = new TextEncoder().encode(process.env.USER_JWT_SECRET || 'your-user-secret-key');
    
    try {
      const { payload } = await jwtVerify(token, secret);
      
      // You can add additional user data validation here if needed
      return NextResponse.json({
        authenticated: true,
        phone: payload.phone,
        loginTime: payload.loginTime
      });

    } catch (jwtError) {
      console.error('JWT verification failed:', jwtError);
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );
    }

  } catch (error) {
    console.error('Token validation error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}