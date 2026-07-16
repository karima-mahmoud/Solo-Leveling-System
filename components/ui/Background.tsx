export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* Purple Blob */}

        <div
          className="
          absolute
          top-[-200px]
          left-[-150px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-violet-700/30
          blur-[180px]
          animate-pulse
          "
        />

        {/* Blue Blob */}

        <div
          className="
          absolute
          bottom-[-200px]
          right-[-150px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[180px]
          animate-pulse
          "
        />

        {/* Center Glow */}

        <div
          className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-violet-500/10
          blur-[220px]
          "
        />

      </div>
    </>
  );
}