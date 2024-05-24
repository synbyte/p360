import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Notes() {
    const supabase = createClient()
    const { data: notes } = await supabase.from("notes").select()
    const { data: {user} } = await supabase.auth.getUser()
    const {data} = await supabase.from('clients').select(`first_name, goals(name)`)
    console.log(data[0].goals)
    if (!user) {redirect('/login')}
    
    return (
        <ul>
            {notes?.map((note) => (
                <li key={note.id}>{note.title}</li>
            ))}
        </ul>
    )
}