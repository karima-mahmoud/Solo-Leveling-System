import Link from "next/link";

import {
    LayoutDashboard,
    MessageCircle,
    User,
    Settings,
    Trophy,
    ScrollText,
    Sparkles
} from "lucide-react";

export default function Sidebar(){

    return(

        <aside
        className="
        w-72
        h-screen
        bg-[#09111f]
        border-r
        border-violet-500/20
        p-8
        flex
        flex-col
        justify-between
        ">

            <div>

                <div className="flex items-center gap-3 mb-10">

                    <Sparkles
                    className="text-violet-500"
                    size={34}
                    />

                    <div>

                        <h1 className="text-2x1 font-bold">

                          SOLO LEVELING

                        </h1>

                        <p className="text-xs text-violet-400">

                            SYSTEM

                        </p>

                    </div>

                </div>

                <div className="border-b border-violet-500/20 mb-8"></div>

                <nav className="space-y-5">

                    <Link
                    href="/dashboard"
                    className="flex items-center gap-4 hover:text-violet-400 transition"
                    >
                        <LayoutDashboard size={20}/>
                        Dashboard
                    </Link>

                    <Link
                    href="/chat"
                    className="flex items-center gap-4 hover:text-violet-400 transition"
                    >
                        <MessageCircle size={20}/>
                        Voice Chat
                    </Link>

                    <Link
                    href="/missions"
                    className="flex items-center gap-4 hover:text-violet-400 transition"
                    >
                        <ScrollText size={20}/>
                        Missions
                    </Link>

                    <Link
                    href="/profile"
                    className="flex items-center gap-4 hover:text-violet-400 transition"
                    >
                        <User size={20}/>
                        Profile
                    </Link>

                    <Link
                    href="/achievements"
                    className="flex items-center gap-4 hover:text-violet-400 transition"
                    >
                        <Trophy size={20}/>
                        Achievements
                    </Link>

                    <Link
                    href="/settings"
                    className="flex items-center gap-4 hover:text-violet-400 transition"
                    >
                        <Settings size={20}/>
                        Settings
                    </Link>

                </nav>

            </div>

            <div
            className="
            rounded-2xl
            bg-gradient-to-r
            from-violet-700
            to-blue-700
            p-5
            ">

                <p className="text-sm">

                    LEVEL

                </p>

                <h2 className="text-5xl font-bold">

                    12

                </h2>

                <div className="mt-4">

                    <p className="text-sm">

                        Rank

                    </p>

                    <h3 className="font-bold">

                        Shadow Hunter

                    </h3>

                </div>

                <div className="mt-4">

                    <p className="text-sm">

                        Coins

                    </p>

                    <h2>

                        2450 🪙

                    </h2>

                </div>

            </div>

        </aside>

    )

}