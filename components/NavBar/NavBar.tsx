import Links from './Links';
import Link from 'next/link'
import React from 'react';
import { createClient } from '@/utils/supabase/server';
import NextBreadcrumb from '../Breadcrumb';

export default async function NavBar({ auth }: { auth: React.ReactNode }) {

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <nav className="flex fixed top-0 z-50 justify-center mb-11 w-full h-16 border-b shadow-md bg-slate-100 border-b-foreground/10 animate-down">
            <div className="flex justify-between items-center p-3 w-full max-w-4xl text-sm">
                {user ? <Links /> : <div className="flex gap-3 p-1 rounded-xl border">
                    <Link className='p-1 hover:text-gray-400' href='/'>Home</Link>

                </div>}

                {auth}
            </div>

        </nav>

    )
}