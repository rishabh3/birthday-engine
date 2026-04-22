import { BirthdayContent } from "./types";

export const tanushi: BirthdayContent = {
  name: "Tanushi",
  title: "Happy Birthday!",
  intro: "Made something for you… don’t expect too much 😁",
  preTitle: "🧸",
  postTitle: "🧸",

  steps: [
    {
      type: "intro",
      buttonText: "Open This",
    },
    {
      type: "tease",
      text: "Okay but this is the actual part 😏",
      buttonText: "Click Again",
    },
    {
      type: "message",
      lines: [
        "I don't really believe in gifts 😂",
        "But I thought I’d make something anyway 😉",
        "Hope this makes your day at least a little better 😁",
      ],
      closing: "🎉 Happy Birthday! Have a great one 🎉",
    },
  ],

  media: {
    type: "emoji",
    value: "🍫🥳🔥🎂",
  },

  insideJoke: "Still owe you that chocolate… at least that one will be real unlike this gift 🍫",

  confetti: true,
};