import Link from "next/link";

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-4 py-10">
      <div className="w-full max-w-3xl mx-auto">
        <section className="rounded-3xl border border-slate-200 bg-white shadow-md px-6 py-7 sm:px-8 sm:py-8">
          {/* Header */}
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            How{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Pantry Pal
            </span>{" "}
            Works
          </h1>
          <p className="mt-2 text-sm sm:text-[15px] text-slate-500 max-w-xl">
            Pantry Pal helps you quickly create meal plans and grocery lists
            that match your budget, pantry items, and preferences.
          </p>

          {/* Steps */}
          <div className="mt-6 space-y-4 text-sm text-slate-700">
            <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
              <h2 className="text-sm font-semibold text-slate-900">
                1. Start on the home screen
              </h2>
              <p className="mt-1">
                From the main page, you can either{" "}
                <span className="font-medium">Get Started</span> right away or
                read more about how the app works. When you click{" "}
                <span className="font-medium">Get Started</span>, you&apos;ll be
                taken to the Ask AI screen.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50/60 border border-emerald-200 px-4 py-3">
              <h2 className="text-sm font-semibold text-emerald-900">
                2. Choose how you want to ask
              </h2>
              <p className="mt-1">
                You can select a{" "}
                <span className="font-medium">quick canned question</span> like
                “What can I cook with my pantry?” or{" "}
                <span className="font-medium">type your own custom prompt</span>{" "}
                describing what you want help with.
              </p>
            </div>

            <div className="rounded-xl bg-sky-50/70 border border-sky-200 px-4 py-3">
              <h2 className="text-sm font-semibold text-sky-900">
                3. Add budget & pantry details
              </h2>
              <p className="mt-1">
                Enter your weekly grocery budget and list any ingredients you
                already have. You can also note dietary preferences like
                vegetarian, high-protein, or gluten-free.
              </p>
            </div>

            <div className="rounded-xl bg-amber-50/80 border border-amber-200 px-4 py-3">
              <h2 className="text-sm font-semibold text-amber-900">
                4. Generate AI recommendations
              </h2>
              <p className="mt-1">
                When you click{" "}
                <span className="font-medium">Generate AI Recommendations</span>
                , Pantry Pal sends your inputs to the AI and builds a{" "}
                <span className="font-medium">
                  7-day meal plan, optimized grocery list, and budget summary
                </span>{" "}
                based on your settings.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
              <h2 className="text-sm font-semibold text-slate-900">
                5. Review results & give feedback
              </h2>
              <p className="mt-1">
                The results page shows your meal plan, grocery list, estimated
                cost, and AI tips. At the bottom you can mark whether you{" "}
                <span className="font-medium">support</span> or{" "}
                <span className="font-medium">don&apos;t support</span> the
                suggestions so we can improve future recommendations.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-emerald-400 hover:text-emerald-600 transition"
            >
              ← Back to Home
            </Link>

            <Link
              href="/prompt"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-emerald-600 transition"
            >
              Get Started with AI →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
