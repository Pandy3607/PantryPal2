"use client";

import { useState } from "react";
import BackButton from "../components/BackButton";

export default function PromptPage() {
  const [question, setQuestion] = useState("");
  const [selectedQuick, setSelectedQuick] = useState("");
  const [budget, setBudget] = useState(100);
  const [ingredients, setIngredients] = useState("");
  const [aiText, setAiText] = useState("");
  const [loading, setLoading] = useState(false);
  const [supportStatus, setSupportStatus] = useState(null); // "support" | "dont"

  const quickOptions = [
    "What should I cook for dinner?",
    "Healthy meal ideas for the week",
    "Quick 30-minute meals",
    "Budget-friendly grocery list",
  ];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedQuick(value);
    if (value) setQuestion(value);
  };

  const handleGenerate = async (e) => {
    e.preventDefault();

    if (!question.trim() && !ingredients.trim()) {
      alert("Please enter a question or some ingredients.");
      return;
    }

    setLoading(true);
    setSupportStatus(null);
    setAiText("");

    try {
      const prompt = `
User question: ${question || "(none)"}
Weekly budget: $${budget || 100}
Current ingredients: ${ingredients || "(none)"}

Give practical meal ideas and shopping advice that fit the budget.
Keep the answer under 200 words.
`;

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error("API error");
      }

      const data = await res.json();
      setAiText(data.text || "Sorry, I couldn't generate a response.");
    } catch (err) {
      console.error(err);
      setAiText("Error: something went wrong talking to the AI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex justify-center py-8">
      <div className="w-full max-w-5xl px-4 space-y-6">
        <BackButton />

        <section className="grid gap-6 md:grid-cols-[minmax(0,2fr),minmax(0,1.3fr)]">
          {/* LEFT: INPUT CARD */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/30">
            <h1 className="text-xl font-semibold tracking-tight">
              Ask PantryPal
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Tell us your budget, what you have on hand, and what you feel like
              eating. We&apos;ll suggest meals and shopping ideas that fit.
            </p>

            <form onSubmit={handleGenerate} className="mt-5 space-y-4">
              {/* DROPDOWN CANNED QUESTION */}
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Canned question
                </label>
                <select
                  value={selectedQuick}
                  onChange={handleSelectChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
                >
                  <option value="">Select a question…</option>
                  {quickOptions.map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </div>

              {/* QUICK BUTTONS */}
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Or tap a quick option
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickOptions.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => {
                        setQuestion(q);
                        setSelectedQuick(q);
                      }}
                      className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 hover:border-emerald-500 hover:text-emerald-300 transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* FREE TEXT INPUT */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Ask anything about meals &amp; groceries
                </label>
                <textarea
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
                  rows={3}
                  placeholder="Example: I have chicken, tomatoes, pasta…"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>

              {/* BUDGET & INGREDIENTS */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Weekly budget ($)
                  </label>
                  <input
                    type="number"
                    min={0}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    placeholder="e.g. 100"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Ingredients you already have
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="eggs, rice, onions, frozen veggies..."
                  />
                </div>
              </div>

              {/* SUBMIT */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 disabled:opacity-60"
                >
                  {loading ? "Generating..." : "Generate AI recommendations"}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: OUTPUT / FEEDBACK */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-200 flex flex-col">
            <p className="text-sm font-semibold">AI Response</p>

            {aiText ? (
              <>
                <textarea
                  readOnly
                  rows={8}
                  className="mt-3 w-full flex-1 rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100"
                  value={aiText}
                />

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => setSupportStatus("support")}
                    className={`flex-1 py-2 rounded-full text-xs font-semibold border ${
                      supportStatus === "support"
                        ? "bg-emerald-500 text-white border-emerald-500"
                        : "bg-slate-950/80 text-emerald-400 border-emerald-500/70"
                    }`}
                  >
                    Support 👍
                  </button>
                  <button
                    onClick={() => setSupportStatus("dont")}
                    className={`flex-1 py-2 rounded-full text-xs font-semibold border ${
                      supportStatus === "dont"
                        ? "bg-rose-500 text-white border-rose-500"
                        : "bg-slate-950/80 text-rose-400 border-rose-500/70"
                    }`}
                  >
                    Don&apos;t support 👎
                  </button>
                </div>

                {supportStatus && (
                  <p className="mt-2 text-[11px] text-slate-400">
                    Thanks for your feedback —{" "}
                    {supportStatus === "support"
                      ? "you supported this suggestion."
                      : "you did not support this suggestion."}
                  </p>
                )}
              </>
            ) : (
              <p className="mt-3 text-xs text-slate-400">
                Your AI answer will appear here after you submit your question.
                You&apos;ll be able to mark whether you support the suggestion or
                not so future recommendations improve.
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
