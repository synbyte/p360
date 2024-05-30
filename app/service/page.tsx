export default async function Page() {
    return (
        <div className="container flex flex-col items-center px-3 mx-6">

            <form className="">
            
                <div className='flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded-xl border-t-8 border-blue-300 shadow-md'>
                    <p className="py-5 mb-10 text-4xl font-black text-center">Welcome to Pier360</p>
                    <div className='md:mb-6 md:flex'>
                        <div className='px-3 md:w-1/3'>
                            <label htmlFor="fname" className='text-xs font-bold tracking-wide uppercase'>First name*</label>
                            <input type="text" name='fname' id='fname' className='px-2 mb-4 w-full rounded border outline-blue-400' />
                        </div>
                        <div className='px-3 md:w-1/3'>
                            <label htmlFor="lname" className='text-xs font-bold tracking-wide uppercase'>Last name*</label>
                            <input type="text" name='lname' id='lname' className='px-2 mb-4 w-full rounded border outline-blue-400' />
                        </div>
                        <div className='px-3 md:w-1/3'>
                            <label htmlFor="phone" className='text-xs font-bold tracking-wide uppercase'>phone #</label>
                            <input type="tel" name="dob" id="dob" className='px-2 mb-4 w-full rounded border outline-blue-400' />
                        </div>
                    </div>
                    <div className='md:flex md:mb-6'>
                        <div className='px-3 w-full md:w-1/2'>
                            <label htmlFor="dob" className='text-xs font-bold tracking-wide uppercase'>birthday*</label>
                            <input type="date" name="dob" id="dob" className='px-2 mb-4 w-full rounded border outline-blue-400' />
                        </div>
                        <div className='flex flex-row justify-center items-center px-1 space-x-2 w-full align-middle md:w-1/2'>
                            <p className="text-xs font-bold tracking-wide uppercase">First time?</p>
                            <select className='mx-1 rounded border outline-blue-400' name="isNew" id="isNew">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <p className="text-xs font-bold tracking-wide uppercase">Orientation?</p>
                            <select className='mx-1 rounded border outline-blue-400' name="isNew" id="isNew">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className='space-x-3 md:flex'>
                        <div className='flex flex-row justify-center items-center px-3 pt-6 md:w-1/2 item'>
                            <p className='text-xs font-bold tracking-wide uppercase'>activity</p>
                            <select className='mx-1 rounded border outline-blue-400' name="service" id="service">
                                <option value="cu">Computer Use</option>
                                <option value="cs">CS</option>
                                <option value="lab">Computer Lab</option>
                                <option value="rc">Recover Center</option>
                                <option value="vo">Volunteer Orientation</option>
                                <option value="agc">Act/Grp/Cls</option>
                            </select>
                        </div>
                        <div className='flex flex-row justify-center items-center px-3 pt-6 md:w-1/4'>
                            <p className='text-xs font-bold tracking-wide uppercase'>peer support</p>
                            <select className='mx-1 rounded border outline-blue-400' name="service" id="service">
                                <option value="ps_a">Advocacy</option>
                                <option value="ps_b">Benefits</option>
                                <option value="ps_c">Crisis</option>
                                <option value="ps_ed">Education</option>
                                <option value="ps_emp">Employment</option>
                                <option value="ps_g">General</option>
                                <option value="ps_h">Housing</option>
                                <option value="ps_r">Resources</option>
                            </select>
                        </div>
                        <div className='flex flex-row justify-center items-center px-3 pt-6 md:w-1/4'>
                            <p className='text-xs font-bold tracking-wide uppercase'>peer</p>
                            <select className='mx-1 rounded border outline-blue-400' name="service" id="service">
                                <option className='' value="ps_a">Names</option>
                                <option value="ps_b">PS_B</option>
                                <option value="ps_c">PS_C</option>
                                <option value="ps_ed">PS_ED</option>
                                <option value="ps_emp">PS_EMP</option>
                                <option value="ps_g">PS_G</option>
                                <option value="ps_h">PS_G</option>
                                <option value="ps_r">PS_R</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>

        </div>

    )
}