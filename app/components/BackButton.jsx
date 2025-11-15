"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ label = "Back to Home" }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/")}
      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-100 shadow-sm hover:border-emerald-500 hover:text-emerald-300 transition"
    >
      <span className="text-lg">←</span>
      <span>{label}</span>
    </button>
  );
}
