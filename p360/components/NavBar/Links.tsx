'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createClient } from '@/utils/supabase/client';

export default function Links({user} : {user: any}) {
    
    const supabase = createClient();
    
    const pathname = usePathname();
    
    return (
        <div className="flex gap-3 p-1 rounded-xl border">
            
                    <Link className={`p-1 hover:text-gray-400 ${pathname === '/protected' ? 'ring-4 rounded-md' : ''}`} href={`${!user ? '/protected' : '/'}`}>Home</Link>
                    <Link className={`p-1 hover:text-gray-400 ${pathname === '/clients' ? 'ring-4 rounded-md' : ''}`} href='/clients'>Clients</Link>
                    <Link className={`p-1 hover:text-gray-400 ${pathname === '/notes' ? 'ring-4 rounded-md' : ''}`} href='/notes'>Notes</Link>
                </div>
    )
}