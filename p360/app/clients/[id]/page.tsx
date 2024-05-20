import { createClient } from '@/utils/supabase/server'

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
        <div className='flex flex-col flex-1 items-center w-full'>
            <p className="text-3xl font-bold">Client Details</p>
            <div className='w-full bg-gradient-to-r from-transparent to-transparent via-foreground/10 p-[1px] my-8'></div>

            {client && (
                <div className='flex flex-row gap-4'>
                    <div className='flex-col p-3 m-2 border'>
                    <p className='text-xl font-bold heading'>{client.first_name} {client.last_name}</p>
                    <p className='text-sm'>{client.dob}</p>
                    <p className='text-sm'>{client.address}</p>
                    <p className='text-sm'>{client.phone}</p>
                    <p className='text-sm'>{client.email}</p>
                   </div>
                   <div className='flex-col p-3 m-2 border'>
                   <p className='text-xl'>Goals:</p>
                    {goalsFetch?.map((goal) => (
                        <div>
                        <p>{goal.id} - {goal.name}</p>
                        <p className='text-sm'>{goal.description}</p>
                        </div>
                    ))}
                   </div>
                </div>
            )}
        </div>
    )
}