import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Link from 'next/link'

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex flex-col flex-1 gap-20 items-center w-full">
      <div className="w-full">
        
        <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
          <div className="flex justify-between items-center p-3 w-full max-w-4xl text-sm">
            <div className='flex gap-2'>
            <Link href='/notes'><button className="px-3 py-2 rounded border hover:bg-btn-background-hover">Notes</button></Link>
            </div>
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="flex flex-col flex-1 gap-20 px-3 max-w-4xl opacity-0 animate-in">
        <Header />
        <main className="flex flex-col flex-1 gap-6">
          <h2 className="mb-4 text-4xl font-bold">Next steps</h2>
          <FetchDataSteps />
        </main>
      </div>

      <footer className="flex justify-center p-8 w-full text-xs text-center border-t border-t-foreground/10">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
