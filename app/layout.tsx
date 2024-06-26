import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import AuthButton from "@/components/NavBar/AuthButton";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
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
        <NavBar auth={<AuthButton />} />
        <main className="flex flex-col items-center pt-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
