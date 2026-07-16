import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Navbar */}
      <Navbar />
      <nav className="flex justify-between items-center px-12 py-8">

        <h1 className="text-3xl font-bold text-violet-500">
          SHADOW AI
        </h1>

        <div className="space-x-4">

          <Link href="/login">
            <button className="px-6 py-2 rounded-lg border border-violet-500 hover:bg-violet-600 transition">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="px-6 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 transition">
              Register
            </button>
          </Link>

        </div>

      </nav>

      {/* Hero */}

      <section className="flex flex-col items-center justify-center text-center mt-32">

        <p className="text-violet-400 uppercase tracking-[8px]">
          Solo Leveling Inspired
        </p>

        <h1 className="text-7xl font-extrabold mt-6">

          SOLO LEVELING

          <span className="text-violet-500">
            {" "}AI
          </span>

        </h1>

        <p className="text-gray-400 mt-8 text-xl max-w-2xl">

          Your intelligent voice companion designed to
          help you study, stay productive, and level up
          every single day.

        </p>

        <div className="flex gap-6 mt-12">

          <Link href="/dashboard">

            <button className="bg-violet-600 px-10 py-4 rounded-xl hover:scale-105 transition">

              Get Started

            </button>

          </Link>

          <button className="border border-violet-600 px-10 py-4 rounded-xl hover:bg-violet-900 transition">

            Watch Demo

          </button>

        </div>

      </section>
      <div className="absolute top-40 left-20 w-72 h-72 bg-violet-600 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600 opacity-20 blur-[120px] rounded-full"></div>
       <section className="max-w-6xl mx-auto py-32">

<h2 className="text-center text-5xl font-bold mb-20">

Why SOLO LEVELING?

</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="bg-[#101826] p-8 rounded-3xl border border-violet-600/20">

<h3 className="text-2xl font-bold mb-4">

🎤 Voice AI

</h3>

<p className="text-gray-400">

Talk naturally with your AI assistant.

</p>

</div>

<div className="bg-[#101826] p-8 rounded-3xl border border-violet-600/20">

<h3 className="text-2xl font-bold mb-4">

⚔ Level System

</h3>

<p className="text-gray-400">

Gain XP and unlock new achievements.

</p>

</div>

<div className="bg-[#101826] p-8 rounded-3xl border border-violet-600/20">

<h3 className="text-2xl font-bold mb-4">

🧠 Smart AI

</h3>

<p className="text-gray-400">

Personal productivity powered by AI.

</p>

</div>

</div>

</section>
<footer className="text-center py-10 text-gray-500 border-t border-violet-500/20">

© 2026 SOLO LEVELING. All rights reserved.

</footer>
    </main>
       
  );
}

