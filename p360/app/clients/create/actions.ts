'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";



export async function create(formData: FormData) {

    const supabase = createClient();

    const data = {
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    email: formData.get("email") as string,
    dob: formData.get("dob"),
    phone: formData.get("phone"),
    address: formData.get("address")
    }

    const { error } = await supabase.from("clients").insert(data)

    if (error) {
        console.log(error)
    }
    redirect('/clients')

}