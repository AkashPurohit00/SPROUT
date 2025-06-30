// app/api/user/logincheck/route.js
import { NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebaseAdmin';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebaseClient';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Step 1: Verify email/password with Firebase Auth
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Step 2: Get user details from Firestore
      const usersRef = adminDb.collection('portalUsers');
      const querySnapshot = await usersRef.where('email', '==', email).get();

      if (querySnapshot.empty) {
        return NextResponse.json(
          { message: 'User data not found in database' },
          { status: 404 }
        );
      }
      const userData = querySnapshot.docs[0].data();

      // Step 3: Check subscription expiry
      const currentDate = new Date();
      const subscriptionExpiry = new Date(userData.subscriptionExp);
      
      if (subscriptionExpiry < currentDate) {
        return NextResponse.json(
          { message: 'Your subscription has expired. Please contact admin to renew.' },
          { status: 403 }
        );
      }

      // Step 4: Send OTP via MSG91
      const otpResponse = await fetch('https://control.msg91.com/api/v5/otp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authkey': process.env.MSG91_AUTH_KEY
        },
        body: JSON.stringify({
          template_id: process.env.MSG91_TEMPLATE_ID,
          mobile: userData.phone,
          authkey: process.env.MSG91_AUTH_KEY
        })
      });

      const otpData = await otpResponse.json();

      if (otpData.type === 'success') {
        // Store session data temporarily (you might want to use a more secure method)
        return NextResponse.json({
          message: 'OTP sent successfully',
          phone: userData.phone,
          userId: user.uid
        });
      } else {
        return NextResponse.json(
          { message: 'Failed to send OTP. Please try again.' },
          { status: 500 }
        );
      }

    } catch (authError) {
      console.error('Firebase Auth Error:', authError);
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

  } catch (error) {
    console.error('Login Check Error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}