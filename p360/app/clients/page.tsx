import { createClient } from "@/utils/supabase/server";
import { redirect } from 'next/navigation'

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
            <p className="text-3xl">Clients</p>
            <div className='w-full bg-gradient-to-r from-transparent to-transparent via-foreground/10 p-[1px] my-8'></div>

            <div className='grid grid-cols-4 gap-3'>
                {clients?.map((client) => (
                    <div className='p-3 rounded-lg border' key={client.id}><p className="underline">{client.first_name} {client.last_name}</p>
                        <p>Email: {client.email}</p>
                        <p>Phone Number: {client.phone}</p>
                        <p>Birthday: {client.dob}</p>
                        <p>Address: {client.address}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}