import { Poppins } from 'next/font/google';

import NavBar from "@/components/NavBar/NavBar";
import AuthButton from '@/components/NavBar/AuthButton';
import NextBreadcrumb from '@/components/Breadcrumb';

const poppins = Poppins({subsets:['latin'], weight:'400'})
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (<>
    
    <main>
          
        
          <div className="flex flex-row justify-end my-6 w-screen h-full bg-green-100">
            <div className='flex fixed left-0 top-16 px-5 w-1/5 h-full bg-red-100 border-r'>
              hello
            </div>
            <div className='flex w-4/5 bg-blue-100'>
              {children}
            </div>
          </div>
        </main>
        </>
  );
}
