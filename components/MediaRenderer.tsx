import { Media } from "../config/types";

export default function MediaRenderer({ media }: { media?: Media }) {
  if (!media) return null;

  if (media.type === "image") {
    return (
      <img
        src={media.src}
        className="rounded-xl mb-4 shadow-lg"
      />
    );
  }

  if (media.type === "emoji") {
    return (
      <div className="text-5xl mb-4 animate-[bounce_1.5s_infinite]">
        {media.value}
      </div>
    );
  }

  return null;
}