import { Poppins } from 'next/font/google';
import "./globals.css";
import NavBar from "@/components/NavBar";
import AuthButton from '@/components/AuthButton';

const poppins = Poppins({subsets:['latin'], weight:'400'})
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-background text-foreground">
        <main className="flex flex-col items-center min-h-screen">
          <NavBar auth={<AuthButton/>}/>
          {children}
        </main>
      </body>
    </html>
  );
}
