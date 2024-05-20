import { createClient } from "@/utils/supabase/server";
import { redirect } from 'next/navigation'
import Link from "next/link";

/**
 * Renders the Clients page, which displays a list of clients fetched from the Supabase database.
 * 
 * If the user is not authenticated, they will be redirected to the login page.
 * 
 * The page displays a "New Client" link to create a new client, and a grid of client cards with the client's name, date of birth, and a "Details" button to view the client's details.
 * 
 * @returns The rendered Clients page component.
 */
export default async function Clients() {
    const supabase = createClient()
    const { data: clients } = await supabase.from("clients").select("*")
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }
    return (
        <div className='container flex flex-col flex-1 items-center'>
            <p className="text-3xl font-bold">Clients</p>
            <Link className='px-4 py-3 rounded border' href='/clients/create'>New Client</Link>
            <div className='w-full bg-gradient-to-r from-transparent to-transparent via-foreground/10 p-[1px] my-8'></div>

            <div className='grid grid-cols-2 gap-3'>
                {clients?.map((client) => (
                    <div className='p-3 space-y-1 text-center rounded-lg border' key={client.id}>
                        <p className="text-xl">{client.first_name} {client.last_name}</p>

                        <p className='text-sm'>{client.dob}</p>

                        <Link href={`/clients/${client.id}`}><button className="px-3 py-1 mt-3 rounded border">Details</button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}