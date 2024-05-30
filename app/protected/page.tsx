import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/NavBar/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import NavBar from "@/components/NavBar/NavBar";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data:clients } = await supabase.from('clients').select('id')
  const { data:goals } = await supabase.from('goals').select('id')
  const { data:milestones } = await supabase.from('milestones').select('id')
  return (
    <div className="flex flex-col flex-1 gap-20 items-center py-10 w-full">
     

      <div className="flex flex-col flex-1 gap-20 px-3 max-w-4xl opacity-0 animate-in">
        
        <main className="flex flex-col flex-1 gap-6">
          <h2 className="mb-4 text-3xl font-bold">Logged in as {user.email}</h2>
          <div className='flex'><h2 className='text-4xl font-bold'> {clients?.filter((client) => client.id).length}</h2><p className='px-2 text-xl'>registered clients</p></div>
          <div className='flex'><h2 className='text-4xl font-bold'> {goals?.filter((goal) => goal.id).length}</h2><p className='px-2 text-xl'> goals</p></div>
          <div className='flex'><h2 className='text-4xl font-bold'> {milestones?.filter((stone) => stone.id).length}</h2><p className='px-2 text-xl'>milestones</p></div>
         
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
