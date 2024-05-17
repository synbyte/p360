'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Links() {

    const pathname = usePathname();
    
    return (
        <div className="flex gap-3 p-1 rounded-xl border">
                    <Link className={`p-1 hover:text-gray-400 ${pathname === '/' ? 'border rounded-lg' : ''}`} href='/'>Home</Link>
                    <Link className={`p-1 hover:text-gray-400 ${pathname === '/clients' ? 'border rounded-lg' : ''}`} href='/clients'>Clients</Link>
                    <Link className={`p-1 hover:text-gray-400 ${pathname === '/notes' ? 'border rounded-lg' : ''}`} href='/notes'>Notes</Link>
                </div>
    )
}