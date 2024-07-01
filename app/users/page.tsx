import { columns } from './columns'
import { DataTable } from './data-table'
import { createClient } from '@/utils/supabase/server'
import { ScrollArea } from '@/components/ui/scroll-area'
export default async function Users() {
    const supabase = createClient()
    const { data: clients } = await supabase.from("clients").select("*")

    return (
        <div className='bg-white border rounded-md border-black container mx-auto py-10'>
            <ScrollArea className='h-[75vh] rounded-md border'>
            <DataTable columns={columns} data={clients} />
            </ScrollArea>        
        </div>
    )

}