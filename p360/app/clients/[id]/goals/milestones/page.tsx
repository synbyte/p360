import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Page({ params }:{params:{id: string}}) {
    const supabase = createClient()
    const { data: goals } = await supabase.from("goals").select("*").eq("parent_goal", params.id)
}