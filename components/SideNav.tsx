export default function SideNav() {

    return (
        <div className='flex fixed left-0 top-16 z-50 flex-col px-5 py-10 w-1/5 h-full border-r shadow border-r-foreground/10 bg-slate-100'>
            <label className='text-xs uppercase' htmlFor="">search</label>
            <div className='flex'><input className='py-1 pl-2 mx-1 rounded border transition outline-blue-400 focus:shadow-md' type="text" /><button className='px-1 py-0 rounded border transition active:shadow-lg hover:bg-btn-background'>Search</button></div>
        </div>
    )
}