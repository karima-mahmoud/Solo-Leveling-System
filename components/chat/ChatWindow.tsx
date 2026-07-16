import { Mic, SendHorizontal } from "lucide-react";

export default function ChatWindow() {
  return (
    <div
      className="
      glass
      rounded-3xl
      border
      border-violet-500/20
      h-[420px]
      flex
      flex-col
      justify-between
      "
    >
      {/* Messages */}

      <div className="p-8 space-y-8 overflow-y-auto">

        {/* AI Message */}

        <div
          className="
          bg-[#18263d]
          p-5
          rounded-2xl
          max-w-xl
          "
        ><p className="text-violet-400 mb-2">

                        SYSTEM

                    </p>

                    <p>

                        Welcome back Hunter.

                        Your daily missions are ready.

                        Press the microphone whenever you're ready.

                    </p>
        </div>

        {/* User Message */}

        <div
                className="
                bg-violet-700
                p-5
                rounded-2xl
                max-w-md
                ml-auto
                ">

                    Hello Shadow.

                </div>

      </div>

      {/* Input */}

      <div className="border-t border-violet-500/20 p-5">

        <div className="flex items-center gap-3">

          <input
            type="text"
            placeholder="Talk to Shadow AI..."
            className="
            flex-1
            glass
            rounded-xl
            px-5
            py-4
            outline-none
            placeholder:text-gray-400
            "
          />

          {/* Voice Button */}

          <button
            className="
            w-14
            h-14
            rounded-xl
            bg-gradient-to-br
            from-violet-600
            to-blue-600
            flex
            items-center
            justify-center
            hover:scale-105
            transition
            duration-300
            shadow-[0_0_20px_#7c3aed]
            "
          >
            <Mic size={22} />
          </button>

          {/* Send Button */}

          <button
            className="
            w-14
            h-14
            rounded-xl
            bg-violet-600
            flex
            items-center
            justify-center
            hover:bg-violet-500
            transition
            duration-300
            "
          >
            <SendHorizontal size={22} />
          </button>

        </div>

      </div>
    </div>
  );
}