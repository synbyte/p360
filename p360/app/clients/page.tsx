import { createClient } from "@/utils/supabase/server";

export default async function Clients() {
    const supabase = createClient()
    const { data: clients } = await supabase.from("clients").select("*")

    return (
        <div>
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