import Image from "next/image";
import { user, missions } from "@/lib/data";
export default function ProfileCard(){

    return(

        <div

        className="

        bg-[#0b1225]/90

        rounded-3xl

        border

        border-violet-500/20

        backdrop-blur-xl

        p-8

        "

        >

            <div className="text-center">

               <Image
                    src="/images/solo-leveling.jpg"
                    alt="Shadow Hunter"
                    width={250}
                    height={350}
                    className="rounded-2xl border border-violet-500 shadow-[0_0_40px_#7c3aed] mx-auto hover:scale-105 transition duration-300"
                    />
                <h2 className="mt-5 text-2xl font-bold">

                    Hunter

                </h2>

                <p className="text-violet-400">

                    Level 12

                </p>

            </div>

            <div className="mt-8">

                <div className="w-full bg-gray-700 h-3 rounded-full">

                    <div

                    className="bg-violet-600 h-3 rounded-full w-[75%]"

                    >

                    </div>

                </div>

                <p className="mt-3">

                    XP 750 / 1000

                </p>

            </div>

            <div className="mt-10">

                <h3 className="font-bold">

                    Today's Mission

                </h3>

                <ul className="space-y-3 mt-5">

                    <li>⚔ Learn React</li>

                    <li>⚔ Workout</li>

                    <li>⚔ Read Quran</li>

                </ul>

            </div>

        </div>

    )

}