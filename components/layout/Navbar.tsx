import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-violet-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-2xl font-bold text-violet-400">
          SOLO LEVELING
        </h1>

        <div className="flex gap-5">

          <Link href="/">
            <span className="hover:text-violet-400 transition">Home</span>
          </Link>

          <Link href="/dashboard">
            <span className="hover:text-violet-400 transition">Dashboard</span>
          </Link>

          <Link href="/login">
            <span className="hover:text-violet-400 transition">Login</span>
          </Link>

        </div>

      </div>
    </nav>
  );
}