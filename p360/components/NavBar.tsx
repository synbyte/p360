'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react';

export default function NavBar({auth}:{auth:React.ReactNode}) {

    const pathname = usePathname();
    
    return (
        <nav className="flex justify-center mb-11 w-full h-16 border-b shadow-sm border-b-foreground/10 animate-down">
            <div className="flex justify-between items-center p-3 w-full max-w-4xl text-sm">
                <div className="flex gap-3 p-1 rounded-xl border">
                    <Link className={`p-1 hover:text-gray-400 ${pathname === '/' ? 'border rounded-lg' : ''}`} href='/'>Home</Link>
                    <Link className={`p-1 hover:text-gray-400 ${pathname === '/clients' ? 'border rounded-lg' : ''}`} href='/clients'>Clients</Link>
                    <Link className={`p-1 hover:text-gray-400 ${pathname === '/notes' ? 'border rounded-lg' : ''}`} href='/notes'>Notes</Link>
                </div>
                {auth}
            </div>
        </nav>
    )
}