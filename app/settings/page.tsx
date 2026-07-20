import DashboardLayout from "@/components/layout/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>

      <div className="glass rounded-3xl p-8">

        <h1 className="text-4xl font-bold mb-8">
          Settings
        </h1>

        <div className="space-y-8">

          {/* Username */}

          <div>

            <label className="block mb-2 text-gray-300">
              Username
            </label>

            <input
              placeholder="Karima"
              className="glass rounded-xl p-4 w-full outline-none"
            />

          </div>

          {/* Language */}

          <div>

            <label className="block mb-2 text-gray-300">
              Language
            </label>

            <select className="glass rounded-xl p-4 w-full">

              <option>English</option>

              <option>العربية</option>

            </select>

          </div>

          {/* Theme */}

          <div>

            <label className="block mb-2 text-gray-300">
              Theme
            </label>

            <select className="glass rounded-xl p-4 w-full">

              <option>Dark</option>

              <option>Light</option>

            </select>

          </div>

          {/* AI Voice */}

          <div>

            <label className="block mb-2 text-gray-300">
              AI Voice
            </label>

            <select className="glass rounded-xl p-4 w-full">

              <option>Male</option>

              <option>Female</option>

            </select>

          </div>

          {/* Notifications */}

          <div className="flex justify-between items-center">

            <span>Enable Notifications</span>

            <input
              type="checkbox"
              className="w-5 h-5"
            />

          </div>

          <button
            className="
            bg-gradient-to-r
            from-violet-600
            to-blue-600
            px-8
            py-4
            rounded-xl
            hover:scale-105
            transition
            "
          >
            Save Changes
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}