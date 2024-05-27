import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

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
          Logout
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
