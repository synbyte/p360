'use client'
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
export default function SideNav() {

    const { id } = useParams()
    const router = useRouter()
    const pathname = usePathname()

    return (

        <div className='fixed left-0 z-50 flex flex-col h-full px-5 py-5 border-r shadow w-96 top-16 border-r-foreground/10 bg-slate-100'>
            {pathname === `/clients/${id}` && ( // If the pathname contains the client id render back button
                <button onClick={() => router.back()} className='pb-3 place-self-start'>Back</button>
            )}

            {pathname === '/clients' && ( // If the pathname is base clients page show search bar
                <> <label className='text-xs uppercase' htmlFor="">search</label>
                    <div className='flex justify-between w-full '>
                        <input className='w-full py-1 pl-2 mr-2 transition border rounded outline-blue-400 focus:shadow-md' type="text" />
                        <button className='px-1 py-0 transition border rounded active:shadow-lg hover:bg-btn-background'>Search</button>
                    </div>
                    <div className='flex'>
                        <p>Add new client</p>
                    </div>
                </>
            )}
            <p>{id}</p>
        </div>
    )
}