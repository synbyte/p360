import { createClient } from '@/utils/supabase/server'
import Link from 'next/link';

/**
 * Renders the client details page for the specified client ID.
 *
 * @param params - An object containing the `id` parameter from the URL.
 * @returns A React component that displays the client's details.
 */
export default async function Page({ params }: { params: { id: string } }) {


    const supabase = createClient();
    const { data: clientFetch } = await supabase.from('clients').select("*").eq("id", params.id)
    const client = clientFetch?.[0] || null;
    const { data: goalsFetch } = await supabase.from('goals').select("*").eq("belongs_to", params.id)
    
    if (!client) {
        return <p>Client not found</p>
    }

    return (
        <div className='flex flex-col flex-1 items-center max-w-screen-md'>
            <p className="text-3xl font-bold">Client Details</p>
            <div className='w-full bg-gradient-to-r from-transparent to-transparent via-foreground/10 p-[1px] my-8'></div>

            {client && (
                <div className='flex flex-row gap-4'>
                    <div className='flex-col p-3 m-2 rounded-lg border'>
                    <p className='mb-4 text-xl heading'>{client.first_name} {client.last_name}</p>
                    <p className='text-sm underline'>D.o.b</p>
                    <p className='mb-1'>{client.dob}</p>
                    <p className='text-sm underline'>Address</p>
                    <p className='mb-1'>{client.address}</p>
                    <p className='text-sm underline'>Phone number</p>
                    <p className='mb-1'>{client.phone}</p>
                    <p className='text-sm underline'>Email</p>
                    <p className=''>{client.email}</p>
                   </div>
                   
                   <div className='flex-col p-3 m-2 rounded-lg border'>
                   <div className='flex flex-row justify-between'><p className='mb-4 text-xl'>Goals</p><Link href={`/clients/${params.id}/goals`}><button className='px-2 rounded ring-2 hover:ring-2 hover:bg-btn-background-hover'>Open Goals</button></Link></div>
                    {goalsFetch?.map((goal) => (
                         
                        <div className='p-2 m-2 rounded border hover:ring-1'>
                        <p>{goal.name}</p>
                        <p className='text-sm'>{goal.description}</p>
                        <Link
                         href={`/clients/${params.id}/goals/${goal.id}/milestones`}
                         key={goal.id}
                     ><button  className='px-2 my-1 rounded ring-2 hover:bg-btn-background-hover hover:ring-2'>Open</button></Link>
                        </div>
                        
                        
                    ))}
                   </div>
                   
                </div>
            )}
        </div>
    )
}