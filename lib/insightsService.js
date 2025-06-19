// lib/insightsService.js
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  increment, 
  query, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION_NAME = 'insights';

// Get all insights (sorted by date, newest first)
export const getInsights = async () => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME), 
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const insights = [];
    
    querySnapshot.forEach((doc) => {
      insights.push({
        id: doc.id,
        ...doc.data(),
        // Convert Firestore timestamp to readable date
        date: doc.data().createdAt?.toDate().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }) || 'No date'
      });
    });
    
    return insights;
  } catch (error) {
    console.error('Error fetching insights:', error);
    throw error;
  }
};

// Add a new insight
export const addInsight = async (insightData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...insightData,
      viewCount: 0,
      createdAt: serverTimestamp()
    });
    
    console.log('Insight added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding insight:', error);
    throw error;
  }
};

// Increment view count
export const incrementViewCount = async (insightId) => {
  try {
    const insightRef = doc(db, COLLECTION_NAME, insightId);
    await updateDoc(insightRef, {
      viewCount: increment(1)
    });
    
    console.log('View count incremented for insight:', insightId);
  } catch (error) {
    console.error('Error incrementing view count:', error);
    throw error;
  }
};

// Validate insight data structure
export const validateInsightData = (data) => {
  const required = ['title', 'subtitle', 'thumbnail', 'pdfLink'];
  const missing = required.filter(field => !data[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }
  
  return true;
};