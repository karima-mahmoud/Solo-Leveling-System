import Sidebar from "@/components/layout/Sidebar";
import ChatWindow from "@/components/chat/ChatWindow";
import VoiceButton from "@/components/chat/VoiceButton";
import ProfileCard from "@/components/ui/ProfileCard";
import XPBar from "@/components/ui/XPBar";
import StatCard from "@/components/ui/StatCard";

export default function Dashboard() {

    return(

        <main className="bg-[#050816] text-white flex">
            

            <Sidebar/>

            <section className="flex-1 p-10">

            
                 <div className="grid grid-cols-3 gap-5 mb-8">

<StatCard
title="Today's XP"
value="450"
/>

<StatCard
title="Streak"
value="18"
/>

<StatCard
title="Rank"
value="S"
/>

</div>

<XPBar/>

<div className="mt-8"></div>
                <ChatWindow/>

                
            </section>

            <aside className="w-96 p-8">

                <ProfileCard/>

            </aside>

        </main>

    )

}