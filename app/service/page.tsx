export default async function Page() {
    return (
        <div className="container flex flex-col items-center px-3">


            <form className="">
                <div className='flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md'>
                    <p className="py-5 mb-10 text-3xl font-bold text-center">Welcome to Pier360!</p>
                    <div className='md:mb-6 md:flex'>
                        <div className='px-3 md:w-1/3'>
                            <label htmlFor="fname" className='text-xs font-bold tracking-wide uppercase'>First name*</label>
                            <input type="text" name='fname' id='fname' className='px-2 mb-4 w-full rounded border' />
                        </div>
                        <div className='px-3 md:w-1/3'>
                            <label htmlFor="lname" className='text-xs font-bold tracking-wide uppercase'>Last name*</label>
                            <input type="text" name='lname' id='lname' className='px-2 mb-4 w-full rounded border' />
                        </div>
                        <div className='px-3 md:w-1/3'>
                            <label htmlFor="phone" className='text-xs font-bold tracking-wide uppercase'>phone #</label>
                            <input type="tel" name="dob" id="dob" className='px-2 mb-4 w-full rounded border' />
                        </div>
                    </div>
                    <div className='flex md:mb-6'>
                        <div className='px-3 w-full md:w-1/2'>
                            <label htmlFor="dob" className='text-xs font-bold tracking-wide uppercase'>birthday*</label>
                            <input type="date" name="dob" id="dob" className='px-2 mb-4 w-full rounded border' />
                        </div>
                        <div className='flex flex-row justify-center items-center px-1 mx-3 space-x-2 w-full align-middle md:w-1/2'>
                            <p className="text-sm font-bold tracking-wide uppercase">First time?</p>
                            <select className='mx-1 rounded border' name="isNew" id="isNew">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <p className="text-sm font-bold tracking-wide uppercase">Orientation?</p>
                            <select className='mx-1 rounded border' name="isNew" id="isNew">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row justify-center items-center px-3 pt-6 w-1/3 item'>
                            <p className='text-sm font-bold tracking-wide uppercase'>activity</p>
                            <select className='mx-1 rounded border' name="service" id="service">
                                <option value="cu">Computer Use</option>
                                <option value="cs">CS</option>
                                <option value="lab">LAB</option>
                                <option value="rc">VOL</option>
                                <option value="vo">VO</option>
                                <option value="agc">AGC</option>
                            </select>
                        </div>
                        <div className='flex flex-row justify-center items-center px-3 pt-6 w-1/3'>
                            <p className='text-sm font-bold tracking-wide uppercase'>peer support</p>
                            <select className='mx-1 rounded border' name="service" id="service">
                                <option value="ps_a">PS_A</option>
                                <option value="ps_b">PS_B</option>
                                <option value="ps_c">PS_C</option>
                                <option value="ps_ed">PS_ED</option>
                                <option value="ps_emp">PS_EMP</option>
                                <option value="ps_g">PS_G</option>
                                <option value="ps_h">PS_G</option>
                                <option value="ps_r">PS_R</option>
                            </select>
                        </div>
                        <div className='flex flex-row justify-center items-center px-3 pt-6 w-1/3'>
                            <p className='text-sm font-bold tracking-wide uppercase'>peer</p>
                            <select className='mx-1 rounded border' name="service" id="service">
                                <option value="ps_a">PS_A</option>
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