import { createClient } from "@/utils/supabase/server"

export default async function Page({ params } : {params: {id: string}}) {

    return (
        <h1>Hello {params.id}</h1>
    )
}