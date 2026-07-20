import DashboardLayout from "@/components/layout/DashboardLayout";

import ChatWindow from "@/components/chat/ChatWindow";

export default function ChatPage() {
  return (
    <DashboardLayout>

      {/* <AIStatus /> */}

      <div className="mt-6">

        <ChatWindow />

      </div>

    </DashboardLayout>
  );
}