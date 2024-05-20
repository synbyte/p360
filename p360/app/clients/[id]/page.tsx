import { createClient } from '@/utils/supabase/server'

export default async function Page({ params } : { params: { id: string }}) {
    
    const clientID = params.id
    const supabase = createClient();
    const {data: client} = await supabase.from('clients').select("*").eq("id",params.id)
    console.log(params.id)
    console.log(client)
    return (<>
        <div>{params.id}</div>
        <div>{client.first_name}</div>
        </>
    )
}