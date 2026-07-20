type Props = {
  title: string;
  description: string;
  xp: number;
  completed: boolean;
};

export default function AchievementCard({
  title,
  description,
  xp,
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
          ? "border border-yellow-400"
          : "border border-violet-500/20"
      }
      `}
    >
      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold">
          🏆 {title}
        </h2>

        <span
          className={`
          px-3
          py-1
          rounded-full
          text-sm
          ${
            completed
              ? "bg-green-600"
              : "bg-gray-700"
          }
          `}
        >
          {completed ? "Unlocked" : "Locked"}
        </span>

      </div>

      <p className="text-gray-400 mt-3">
        {description}
      </p>

      <div className="mt-6 flex justify-between">

        <span className="text-violet-400">
          Reward
        </span>

        <span>
          +{xp} XP
        </span>

      </div>

    </div>
  );
}