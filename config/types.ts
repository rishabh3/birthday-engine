export type Step =
  | {
      type: "intro";
      buttonText: string;
    }
  | {
      type: "tease";
      text: string;
      buttonText: string;
    }
  | {
      type: "message";
      lines: string[];
      closing: string;
    };

export type Media =
  | { type: "image"; src: string }
  | { type: "emoji"; value: string };

export type BirthdayContent = {
  affection: string;
  name: string;
  title: string;
  intro: string;
  preTitle: string;
  postTitle: string;

  steps: Step[];

  media?: Media;
  insideJoke?: string;
  personalMessage?: string;

  confetti?: boolean;
};