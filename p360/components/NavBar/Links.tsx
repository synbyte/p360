'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

export default function Links() {
    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
       // Fetches authenticated user data and sets it to user variable. Used to determine where to redirect user to when home link is clicked.
        async function fetchUser() {
            const supabase = createClient();
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
           
        };
        
        fetchUser();
       
        
    },[])
    
   
    
    const pathname = usePathname();
    
    return (
        <div className="flex gap-3 p-1 rounded-xl border">
            
                    <Link className={`p-1 hover:text-gray-400 ${pathname === '/protected' ? 'ring-4 rounded-md' : ''}`} href={`${user ? '/protected' : '/'}`}>Home</Link>
                    <Link className={`p-1 hover:text-gray-400 ${pathname === '/clients' ? 'ring-4 rounded-md' : ''}`} href='/clients'>Clients</Link>
                    <Link className={`p-1 hover:text-gray-400 ${pathname === '/notes' ? 'ring-4 rounded-md' : ''}`} href='/notes'>Notes</Link>
                    <Link className={`p-1 hover:text-gray-400 ${pathname === '/service' ? 'ring-4 rounded-md' : ''}`} href='/service'>MoFI</Link>
                </div>
    )
}