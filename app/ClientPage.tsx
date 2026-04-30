"use client";

import Card from "../components/Card";
import Balloons from "../components/Balloons";
import { useSearchParams } from "next/navigation";
import { configs, ConfigKey } from "../config";

export default function ClientPage() {
  const params = useSearchParams();
  const user = params.get("user") as ConfigKey;

  const content = configs[user] || configs.tanushi;
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 p-4 overflow-y-auto">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Balloons />
      </div>

      <div className="relative z-10 w-full flex justify-center py-6">
        <Card content={content} />
      </div>
    </main>
  );
}
