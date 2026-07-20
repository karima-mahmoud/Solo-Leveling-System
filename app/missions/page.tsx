import DashboardLayout from "@/components/layout/DashboardLayout";
import MissionCard from "@/components/ui/MissionCard";
import { missions } from "@/lib/data";

export default function MissionsPage() {
  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">

        Daily Missions

      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {missions.map((mission) => (

          <MissionCard
            key={mission.id}
            title={mission.title}
            description={mission.description}
            xp={mission.xp}
            difficulty={mission.difficulty}
            completed={mission.completed}
          />

        ))}

      </div>

    </DashboardLayout>
  );
}