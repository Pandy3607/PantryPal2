import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-slate-50 to-white text-slate-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl">
        {/* CARD */}
        <section className="mx-auto rounded-3xl border border-slate-200 bg-white shadow-xl px-6 py-7 sm:px-10 sm:py-10">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Pantry Pal • Smart meal planning
          </div>

          {/* Heading + subheading */}
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Pantry Pal
            </span>
          </h1>
          <p className="mt-2 text-sm sm:text-[15px] text-slate-500 max-w-xl">
            Your intelligent cooking companion that helps you plan meals,
            create grocery lists, and stay within your budget using AI.
          </p>

          {/* Feature strips (matches the wireframe sections) */}
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-amber-50 border border-amber-200 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
                AI-Powered Suggestions
              </p>
              <p className="mt-1 text-xs sm:text-[13px] text-amber-900/80">
                Get personalized meal ideas based on your pantry, budget, and
                preferences.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 border border-sky-200 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-800">
                Budget Friendly
              </p>
              <p className="mt-1 text-xs sm:text-[13px] text-sky-900/80">
                Stay within your weekly grocery budget with smart shopping
                suggestions.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                Use What You Have
              </p>
              <p className="mt-1 text-xs sm:text-[13px] text-emerald-900/80">
                Reduce waste by building meals around ingredients you already
                own.
              </p>
            </div>
          </div>

          {/* How it works – 3 steps */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3 text-[11px] sm:text-xs text-slate-600">
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
              <p className="text-[11px] font-semibold text-slate-900">
                1. Set budget & pantry
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                Enter your weekly budget and ingredients you already have.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
              <p className="text-[11px] font-semibold text-slate-900">
                2. Ask Pantry Pal
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                Pick a quick question or ask anything about meals & groceries.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
              <p className="text-[11px] font-semibold text-slate-900">
                3. Get plan & list
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                Review AI suggestions, adjust, and export your grocery list.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
            <Link
              href="/prompt"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-emerald-600 transition"
            >
              Get Started →
            </Link>

            <Link
              href="/how-it-works"
              className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:border-emerald-400 hover:text-emerald-600 transition"
            >
              Learn how it works
            </Link>
          </div>

          {/* Small sign-in line at bottom (optional) */}
          <p className="mt-4 text-[11px] text-slate-500 text-center">
            Already using Pantry Pal?{" "}
            <span className="text-emerald-600 font-medium">
              Sign in (coming soon)
            </span>
          </p>
        </section>
      </div>
    </main>
  );
}
