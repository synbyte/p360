import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import logoutIcon from "./logout-3-svgrepo-com.svg";
import Image from "next/image";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex gap-4 items-center">
      Logged in as {user.email}!
      <form action={signOut}>
        <button className="px-3 py-1 text-xs rounded ring-2 no-unerline hover:bg-btn-background-hover">
          <div className='flex flex-row'><Image src={logoutIcon} alt="logout" width={20} height={20} /> <p className=''></p></div>
          
        </button>
      </form>
    </div>
  ) : (
    <div className="flex justify-end w-full">
    <Link
      href="/login"
      className="flex px-3 py-2 no-underline rounded-md border bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
    </div>
  );
}
