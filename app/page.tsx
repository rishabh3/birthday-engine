"use client";

import { useSearchParams } from "next/navigation";
import Card from "../components/Card";
import { configs, ConfigKey } from "../config";
import Balloons from "../components/Balloons";

export default function Home() {
  const params = useSearchParams();
  const user = params.get("user") as ConfigKey;

  const content = configs[user] || configs.tanushi;

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 p-4 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Balloons />
      </div>
      <div className="relative z-10">
        <Card content={content} />
      </div>
    </main>
  );
}
