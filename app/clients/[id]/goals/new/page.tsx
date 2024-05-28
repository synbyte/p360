import {create} from './actions'

export default function Page({params}:{params:{id:string}}) {

    return (
        <div className='flex flex-col flex-1 gap-2 justify-center px-8 w-full sm:max-w-md'>
            <p className="text-3xl font-bold">Add New Goal</p>
            <div className='w-full bg-gradient-to-r from-transparent to-transparent via-foreground/10 p-[1px] my-8'></div>

            <form className='flex flex-col flex-1' action="">
                <input type="hidden" name="id" value={params.id} />
                <label htmlFor="first_name">Title:</label>
                <input className="px-4 py-2 mb-5 rounded-md border bg-inherit" type="text" name="name" id="name" />
                <label htmlFor="last_name">Description:</label>
                <textarea  className="px-4 py-2 mb-5 rounded-md border bg-inherit" name="description" id="description" />
                <button className='p-3 mb-3 rounded border' type="submit" formAction={create}>Create</button>
            </form>
        </div>
    )

  

}