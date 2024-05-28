export default async function Page() {
    return (
        <div className="container flex flex-col items-center px-3">
            <p className="text-3xl font-bold">Welcome, please sign in</p>
            
            <div className='w-full bg-gradient-to-r from-transparent to-transparent via-foreground/10 p-[1px] my-8'></div>
            <form className="">
                <div className='flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md'>
                    <div className='md:mb-6 md:flex'>
                        <div className='px-3 md:w-1/2'>
                            <label htmlFor="fname" className='text-xs font-bold tracking-wide uppercase'>First name*</label>
                            <input type="text" name='fname' id='fname' className='px-2 mb-4 w-full rounded border' />
                        </div>
                        <div className='px-3 md:w-1/2'>
                            <label htmlFor="lname" className='text-xs font-bold tracking-wide uppercase'>Last name*</label>
                            <input type="text" name='lname' id='lname' className='px-2 mb-4 w-full rounded border' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='px-3 w-full md:w-1/2'>
                            <label htmlFor="dob" className='text-xs font-bold tracking-wide uppercase'>birthday*</label>
                            <input type="date" name="dob" id="dob" className='px-2 mb-4 w-full rounded border' />
                        </div>
                        <div className='px-3 w-full md:w-1/2'>
                            <label htmlFor="phone" className='text-xs font-bold tracking-wide uppercase'>phone #</label>
                            <input type="tel"  name="dob" id="dob" className='px-2 mb-4 w-full rounded border' />
                        </div>
                    </div>
                </div>
            </form>

        </div>

    )
}