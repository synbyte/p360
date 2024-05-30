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
        <div className='flex flex-col flex-1 items-center'>
            <p className="text-3xl font-bold">Client Details</p>
            <div className='w-full bg-gradient-to-r from-transparent to-transparent via-foreground/10 p-[1px] my-8'></div>

            {client && (
                <div className='flex flex-row gap-4'>
                    <div className='flex-col p-3 m-2 bg-white rounded-lg border'>
                        <p className='mb-4 text-xl uppercase'>{client.first_name} {client.last_name}</p>
                        <p className='text-xs font-bold tracking-wide uppercase text-slate-500'>D.o.b</p>
                        <p className='mb-3'>{client.dob}</p>
                        <p className='text-xs font-bold tracking-wide uppercase text-slate-500'>Address</p>
                        <p className='mb-3'>{client.address}</p>
                        <p className='text-xs font-bold tracking-wide uppercase text-slate-500'>Phone number</p>
                        <p className='mb-3'>{client.phone}</p>
                        <p className='text-xs font-bold tracking-wide uppercase text-slate-500'>Email</p>
                        <p className=''>{client.email}</p>
                    </div>

                    <div className='flex-col p-3 m-2 bg-white rounded-lg border'>
                        <div className='flex flex-row justify-between space-x-3'>
                            <p className='mx-2 mb-4 text-xl'>Goals</p>
                            <Link href={`/clients/${params.id}/goals`}>
                                <p className='inline-block px-1 py-1 mx-2 text-lg font-bold diagonal-fractions rounded-full border-2 border-blue-400 border-double ring-4 shadow-md transition hover:bg-btn-background-hover/15'>{goalsFetch?.filter((goal) => goal.is_done).length}/{goalsFetch?.filter((goal) => goal.id).length} </p>
                                
                            </Link></div>

                        {goalsFetch?.slice(0, 3).map((goal) => (

                            <div key={goal.id} className='p-2 m-2 rounded border transition-all hover:ring-1'>
                                <p>{goal.name}</p>
                                <p className='text-sm'>{goal.description}</p>
                                <Link
                                    href={`/clients/${params.id}/goals/${goal.id}/milestones`}
                                    key={goal.id}
                                ><button className='px-2 my-1 rounded ring-2 transition-all hover:bg-btn-background-hover hover:ring-2'>Open</button></Link>
                            </div>


                        ))}
                    </div>

                </div>
            )}
        </div>
    )
}