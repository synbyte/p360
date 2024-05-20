import Links from './Links';
import React from 'react';
import { createClient } from '@/utils/supabase/server';
import NextBreadcrumb from '../Breadcrumb';

export default async function NavBar({auth}:{auth:React.ReactNode}) {

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    return (
        <nav className="flex justify-center mb-11 w-full h-16 border-b shadow-sm border-b-foreground/10 animate-down">
            <div className="flex justify-between items-center p-3 w-full max-w-4xl text-sm">
                {user ? <Links/> :null }
                
                {auth}
            </div>
            
        </nav>
        
    )
}