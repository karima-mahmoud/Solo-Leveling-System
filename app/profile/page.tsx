import DashboardLayout from "@/components/layout/DashboardLayout";
import ProfileCard from "@/components/ui/ProfileCard";
import XPBar from "@/components/ui/XPBar";

export default function ProfilePage() {
  return (
    <DashboardLayout>

      <div className="grid md:grid-cols-2 gap-6">

        <ProfileCard />

        <div className="glass rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Hunter Information
          </h2>

          <div className="space-y-4">

            <p>Name : Karima</p>

            <p>Rank : Shadow Hunter</p>

            <p>Level : 12</p>

            <p>Coins : 2450</p>

          </div>

          <div className="mt-8">

            <XPBar />

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}