import { createClient } from "@/utils/supabase/server"
import Link from 'next/link'

export default async function Page({ params } : {params: {id: string}}) {

    const supabase = createClient()
    const { data: goals } = await supabase.from("goals").select("*").eq("belongs_to", params.id)

    return (
        <div className='flex flex-col flex-1 items-center w-full'>
            <p className='text-3xl'>Goals</p>
            <Link href={`/clients/${params.id}/goals/new`} className='px-4 py-1 rounded border'>New Goal</Link>
            <div className='w-full bg-gradient-to-r from-transparent to-transparent via-foreground/10 p-[1px] my-8'></div>
            <div className="">
            {goals?.map((goal) => (
               <div key={goal.id} className="text-start"> 
                <input className='mr-2' checked={goal.is_done} type="checkbox" name="is_done" id="is_done"/>
                <label htmlFor="is_done">{goal.is_done ? 'Completed' : 'In Progress'}</label>
                <p className='text-xl underline'>{goal.name}</p>
                <p>{goal.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}