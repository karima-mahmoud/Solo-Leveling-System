type Props = {
  title: string;
  description: string;
  xp: number;
  difficulty: string;
  completed: boolean;
};

export default function MissionCard({
  title,
  description,
  xp,
  difficulty,
  completed,
}: Props) {
  return (
    <div
      className={`
      glass
      rounded-3xl
      p-6
      transition
      hover:scale-[1.02]
      ${
        completed
          ? "border border-green-500"
          : "border border-violet-500/20"
      }
      `}
    >
      <div className="flex justify-between">

        <h2 className="text-xl font-bold">

          ⚔ {title}

        </h2>

        <span className="text-violet-400">

          +{xp} XP

        </span>

      </div>

      <p className="text-gray-400 mt-4">

        {description}

      </p>

      <div className="flex justify-between mt-6">

        <span>

          Difficulty :
          <span className="text-violet-400 ml-2">
            {difficulty}
          </span>

        </span>

        <span>

          {completed ? "✅ Completed" : "⏳ Pending"}

        </span>

      </div>

      <button
        className="
        mt-6
        w-full
        py-3
        rounded-xl
        bg-gradient-to-r
        from-violet-600
        to-blue-600
        hover:scale-[1.02]
        transition
        "
      >
        Complete Mission
      </button>

    </div>
  );
}