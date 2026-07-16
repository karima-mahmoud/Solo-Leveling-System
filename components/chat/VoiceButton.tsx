import { Mic } from "lucide-react";

export default function VoiceButton() {

  return (

    <div className="relative flex justify-center items-center mt-6">

      <div
        className="
        absolute
        w-44
        h-30
        rounded-full
        bg-violet-600/20
        blur-xl
        animate-ping
        "
      />

      <button
        className="
        relative
        w-28
        h-28
        rounded-full
        bg-gradient-to-br
        from-violet-500
        to-blue-600
        flex
        items-center
        justify-center
        shadow-[0_0_60px_#7C3AED]
        hover:scale-110
        duration-300
        "
      >

        <Mic size={30} />

      </button>

    </div>

  );

}