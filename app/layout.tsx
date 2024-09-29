"use client";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "./_context/AuthContext";
import Menu from "./_components/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from 'next/navigation';

const geistSans = localFont({
  src: "./_fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./_fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <div className="flex min-h-screen">
              <div className="w-64  bg-gray-800 text-white flex flex-col">
                <div className="p-4 text-xl font-bold border-b border-gray-700">Dashboard</div>          
                <Menu currentPath={pathname} />             
                </div>          
                <main className="flex-1 bg-gray-100 p-6">            
                  {children}                
                  </main>           
              </div>       
          </body>
        </html>
      </QueryClientProvider>
    </AuthProvider>
  );
}
