"use client";

const balloons = [
  {
    left: "10%",
    delay: "0s",
    duration: "8s",
    size: "w-12 h-16",
    color: "bg-pink-400",
  },
  {
    left: "30%",
    delay: "2s",
    duration: "10s",
    size: "w-10 h-14",
    color: "bg-purple-400",
  },
  {
    left: "60%",
    delay: "1s",
    duration: "7s",
    size: "w-14 h-20",
    color: "bg-yellow-400",
  },
  {
    left: "80%",
    delay: "3s",
    duration: "9s",
    size: "w-11 h-15",
    color: "bg-blue-400",
  },
];

export default function Balloons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {balloons.map((b, i) => (
        <div
          key={i}
          className="absolute bottom-[-100px]"
          style={{
            left: b.left,
            animation: `float ${b.duration} linear infinite`,
            animationDelay: b.delay,
          }}
        >
          {/* Balloon */}
          <div className="relative">
            <div className={`${b.size} ${b.color} rounded-[50%] relative`}>
              <div className="absolute top-3 left-3 w-2 h-2 bg-white/40 rounded-full blur-sm"></div>
            </div>
            <div className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-3 h-3 ${b.color} rotate-45`}></div>
          </div>

          {/* String */}
          <div className="w-[2px] h-12 bg-gray-400 mx-auto" />
        </div>
      ))}
    </div>
  );
}
