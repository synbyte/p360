export default function SideNav() {

    return (
        <div className='fixed left-0 z-50 flex flex-col h-full px-5 py-10 border-r shadow w-96 top-16 border-r-foreground/10 bg-slate-100'>
            <label className='text-xs uppercase' htmlFor="">search</label>
            <div className='flex justify-between w-full '>
                <input className='w-full py-1 pl-2 mr-2 transition border rounded outline-blue-400 focus:shadow-md' type="text" />
                <button className='px-1 py-0 transition border rounded active:shadow-lg hover:bg-btn-background'>Search</button>
            </div>
        </div>
    )
}