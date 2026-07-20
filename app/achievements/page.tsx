import DashboardLayout from "@/components/layout/DashboardLayout";
import AchievementCard from "@/components/ui/AchievementCard";
import { achievements } from "@/lib/data";

export default function AchievementsPage() {
  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">
        Achievements
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {achievements.map((achievement) => (

          <AchievementCard
            key={achievement.id}
            title={achievement.title}
            description={achievement.description}
            xp={achievement.xp}
            completed={achievement.completed}
          />

        ))}

      </div>

    </DashboardLayout>
  );
}