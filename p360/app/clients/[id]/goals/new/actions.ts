'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";

export async function create(formData: FormData) {
    const id = formData.get('id')
    const supabase = createClient();
    const data = {
        name: formData.get("name"),
        description: formData.get("description"),
        belongs_to: formData.get("id"),
        is_done:'false'
    }

    const {error} = await supabase.from("goals").insert(data)
    if (error){
        console.log(error)
    }
    redirect(`/clients/${id}/goals`)
}