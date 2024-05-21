import { createClient } from "@/utils/supabase/server"
import Link from 'next/link'

export default async function Page({ params }: { params: { id: string } }) {
    const supabase = createClient();
    const { data: goals } = await supabase
        .from("goals")
        .select("*")
        .eq("belongs_to", params.id);
    const { data: user } = await supabase
        .from("clients")
        .select("*")
        .eq("id", params.id)
        .single();
    const { data: milestones } = await supabase
        .from("milestones")
        .select("parent_goal")
       
        console.log(milestones)
    return (
        <div className="flex flex-col flex-1 items-center w-full">
            <p className="text-3xl font-bold">
                {user?.first_name ? user.first_name + "'s Goals" : "Goals"}
            </p>
            <Link
                href={`/clients/${params.id}/goals/new`}
                className="px-4 py-1 rounded border"
            >
                New Goal
            </Link>
            <div className="w-full bg-gradient-to-r from-transparent to-transparent via-foreground/10 p-[1px] my-8"></div>
            <div className="grid grid-cols-2 gap-3 max-w-screen-md">
                {goals?.map((goal) => (
                    
                    <Link
                        href={`/clients/${params.id}/goals/${goal.id}/milestones`}
                        key={goal.id}
                    > 
                        <div key={goal.id} className="flex flex-col p-3 rounded border text-start">
                            <div className='flex justify-between'>
                                <div><input
                                className="mr-2"
                                checked={goal.is_done}
                                readOnly
                                type="checkbox"
                                name="is_done"
                                id="is_done"
                            /> 
                            <label htmlFor="is_done">
                                {goal.is_done ? "Completed" : "In Progress"}
                            </label></div>
                            <p className='inline-block self-end'>{milestones?.filter((stone) => stone.parent_goal === goal.id).length} Milestones </p>
                            </div>
                            
                            <p className="text-xl underline">{goal.name}</p>
                            <p>{goal.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}