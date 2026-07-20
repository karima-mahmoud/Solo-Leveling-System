type Props = {
  sender: "ai" | "user";
  message: string;
};

export default function ChatBubble({
  sender,
  message,
}: Props) {
  const isAI = sender === "ai";

  return (
    <div
      className={`flex ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-2xl p-5 ${
          isAI
            ? "glass"
            : "bg-gradient-to-r from-violet-600 to-blue-600"
        }`}
      >
        <p
          className={`mb-2 font-semibold ${
            isAI ? "text-violet-400" : "text-white"
          }`}
        >
          {isAI ? "SHADOW AI" : "You"}
        </p>

        <p>{message}</p>
      </div>
    </div>
  );
}