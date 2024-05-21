import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Page({ params }:{params:{goal: string}}) {
    const supabase = createClient()
    const { data: milestones } = await supabase.from("milestones").select("*").eq("parent_goal", params.goal)
    
    
    return( 
    <div className='container flex flex-col flex-1 items-center'>
        <p className='text-3xl font-bold'>Milestones</p>
        <div className='w-full bg-gradient-to-r from-transparent to-transparent via-foreground/10 p-[1px] my-8'></div>

    <ul className="divide-y">
            {milestones?.map((milestone) => (<li className="py-2" key={milestone.id}>
                <p>{milestone.description}</p>
                <p className="text-sm">{milestone.notes}</p>
                <p className="text-xs text-black/25">{milestone.created_at}</p>
                
                </li>
            ))}
        </ul>
        </div>
    )
}