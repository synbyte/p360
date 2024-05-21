import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Page({ params }:{params:{goal: string}}) {
    const supabase = createClient()
    const { data: milestones } = await supabase.from("milestones").select("*").eq("parent_goal", params.goal)
    
const { data: goals, error } = await supabase
.from('goals')
.select(`
  id,
  milestones (
    parent_goal
  )
`)
console.log(goals)

    return(
        <ul className="divide-y">
            {milestones?.map((milestone) => (<li className="py-2" key={milestone.id}>
                <p>{milestone.description}</p>
                <p className="text-sm">{milestone.notes}</p>
                <p className="text-xs text-black/25">{milestone.created_at}</p>
                
                </li>
            ))}
        </ul>
    )
}