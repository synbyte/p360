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
        <div className='container flex flex-col items-center bg-red-300'>
            
            <ul>
                {clients?.map((client) => (
                    <li key={client.id}><p className="underline">{client.first_name} {client.last_name}</p>
                    <p>Email: {client.email}</p>
                    <p>Phone Number: {client.phone}</p>
                    <p>Birthday: {client.dob}</p>
                    <p>Address: {client.address}</p>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}