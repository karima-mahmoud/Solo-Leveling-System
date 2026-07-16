import { Bell, Search } from "lucide-react";

export default function TopBar() {
  return (
    <header className="glass h-20 rounded-3xl px-8 flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold">
          Welcome Back, Hunter 👋
        </h1>

        <p className="text-gray-400">
          Ready to level up today?
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="glass rounded-xl px-4 py-2 flex items-center gap-3">

          <Search size={18} />

          <input
            placeholder="Search..."
            className="bg-transparent outline-none"
          />

        </div>

        <button className="glass p-3 rounded-xl card-hover">

          <Bell />

        </button>

      </div>

    </header>
  );
}