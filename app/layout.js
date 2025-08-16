import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UserAuthProvider } from '@/contexts/UserAuthContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sprout Research",
  icons: {
    icon: '/favicon.png',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <UserAuthProvider>
          <UserAuthProvider>
            {children}
          </UserAuthProvider>
        </UserAuthProvider>
      </body>
    </html>
  );
}
