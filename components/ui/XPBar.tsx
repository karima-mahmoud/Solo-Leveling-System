export default function XPBar() {
  return (
    <div className="glass rounded-3xl p-6">

      <div className="flex justify-between">

        <span className="font-bold text-violet-400">

          LEVEL 12

        </span>

        <span>

          750 / 1000 XP

        </span>

      </div>

      <div className="w-full bg-gray-700 rounded-full h-5 mt-5 overflow-hidden">

        <div
          className="
          h-full
          rounded-full
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-cyan-400
          w-[75%]
          "
        ></div>

      </div>

    </div>
  );
}