import { create } from './actions'

/**
 * Renders a form for creating a new client.
 *
 * The form includes fields for first name, last name, date of birth, email, phone number, and address.
 * When the "Create" button is clicked, the form is submitted to the `create` action.
 */
export default function Create() {


    return (
        <div className='flex flex-col flex-1 gap-2 justify-center px-8 w-full sm:max-w-md'>
            <p className="text-3xl font-bold">Add Client</p>
            <div className='w-full bg-gradient-to-r from-transparent to-transparent via-foreground/10 p-[1px] my-8'></div>

            <form className='flex flex-col flex-1' action="">
                <label htmlFor="first_name">First name:</label>
                <input className="px-4 py-2 mb-6 rounded-md border bg-inherit" type="text" name="first_name" id="first_name" />
                <label htmlFor="last_name">Last name:</label>
                <input className="px-4 py-2 mb-6 rounded-md border bg-inherit" type="text" name="last_name" id="last_name" />
                <label htmlFor="dob">Birthday:</label>
                <input className="px-4 py-2 mb-6 rounded-md border bg-inherit" type="date" name="dob" id="dob" />
                <label htmlFor="email">Email:</label>
                <input className="px-4 py-2 mb-6 rounded-md border bg-inherit" type="email" name="email" id="email" />
                <label htmlFor="phone">Phone number:</label>
                <input className="px-4 py-2 mb-6 rounded-md border bg-inherit" type="tel" name="phone" id="phone" />
                <label htmlFor="address">Address:</label>
                <input className="px-4 py-2 mb-6 rounded-md border bg-inherit" type="text" name="address" id="address" />
                <button type="submit" formAction={create}>Create</button>
            </form>
        </div>


    )
}