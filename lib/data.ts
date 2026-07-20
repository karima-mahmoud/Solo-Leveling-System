export const user = {
  name: "Karima",
  title: "Shadow Hunter",
  level: 12,
  rank: "S",
  xp: 750,
  maxXp: 1000,
  coins: 2450,
  streak: 18,
};


export const chats = [
  {
    id: 1,
    sender: "ai",
    message:
      "Welcome back Hunter. Your daily missions are ready.",
  },
  {
    id: 2,
    sender: "user",
    message: "Hello Shadow 👋",
  },
];

export const achievements = [
  {
    id: 1,
    title: "First Conversation",
    description: "Start your first chat with Shadow AI.",
    completed: true,
    xp: 50,
  },
  {
    id: 2,
    title: "7-Day Streak",
    description: "Use the app for 7 consecutive days.",
    completed: true,
    xp: 200,
  },
  {
    id: 3,
    title: "Voice Master",
    description: "Complete 50 voice conversations.",
    completed: false,
    xp: 500,
  },
  {
    id: 4,
    title: "Level 20 Hunter",
    description: "Reach Level 20.",
    completed: false,
    xp: 1000,
  },
  {
    id: 5,
    title: "Mission Champion",
    description: "Complete 100 daily missions.",
    completed: false,
    xp: 800,
  },
];

export const missions = [
  {
    id: 1,
    title: "Complete React Lesson",
    description: "Study React for 1 hour.",
    xp: 100,
    completed: false,
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Workout",
    description: "Exercise for 30 minutes.",
    xp: 150,
    completed: true,
    difficulty: "Medium",
  },
  {
    id: 3,
    title: "Read Quran",
    description: "Read one page.",
    xp: 50,
    completed: false,
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "Practice AI",
    description: "Solve one AI problem.",
    xp: 250,
    completed: false,
    difficulty: "Hard",
  },
];