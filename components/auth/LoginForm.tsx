"use client";

import { Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="glass rounded-3xl p-10 w-[420px]">

      <h1 className="text-4xl font-bold mb-2 text-center">
        Welcome Back
      </h1>

      <p className="text-gray-400 text-center mb-8">
        Login to continue your journey
      </p>

      <div className="space-y-5">

        <div className="glass rounded-xl flex items-center px-4">

          <Mail className="text-violet-400" />

          <input
            type="email"
            placeholder="Email"
            className="bg-transparent outline-none w-full p-4"
          />

        </div>

        <div className="glass rounded-xl flex items-center px-4">

          <Lock className="text-violet-400" />

          <input
            type="password"
            placeholder="Password"
            className="bg-transparent outline-none w-full p-4"
          />

        </div>

        <button
          className="
          w-full
          py-4
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          to-blue-600
          hover:scale-[1.02]
          duration-300
          "
        >
          Login
        </button>

      </div>

      <p className="text-center mt-6">

        Don't have an account?

        <Link
          href="/register"
          className="text-violet-400 ml-2"
        >
          Register
        </Link>

      </p>

    </div>
  );
}