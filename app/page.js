export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-black/40 p-6 space-y-6">
          {/* Logo / title */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-emerald-500/15 flex items-center justify-center">
              <span className="text-2xl">🥦</span>
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Welcome to
              </p>
              <h1 className="text-xl font-semibold tracking-tight">
                <span className="text-slate-100">Pantry</span>
                <span className="text-emerald-400">Pal</span>
              </h1>
              <p className="mt-1 text-xs text-slate-400">
                Your intelligent partner for meal planning and grocery budgeting.
              </p>
            </div>
          </div>

          {/* Feature blocks */}
          <div className="space-y-3 text-sm">
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 px-4 py-3">
              <p className="font-semibold text-orange-200">
                AI-Powered Suggestions
              </p>
              <p className="text-xs text-orange-100/80 mt-1">
                Get personalized meal ideas based on your pantry and budget.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 px-4 py-3">
              <p className="font-semibold text-sky-200">Budget Friendly</p>
              <p className="text-xs text-sky-100/80 mt-1">
                Stay within your weekly grocery budget with smart planning.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
              <p className="font-semibold text-emerald-200">Use What You Have</p>
              <p className="text-xs text-emerald-100/80 mt-1">
                Reduce waste by using ingredients you already own.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <a
            href="/prompt"
            className="block w-full text-center rounded-full bg-emerald-500 text-slate-950 py-3 text-sm font-semibold shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
          >
            Get Started →
          </a>

          <p className="text-[11px] text-center text-slate-500">
            Already have an account?{" "}
            <span className="text-emerald-400 hover:text-emerald-300 cursor-pointer">
              Sign in
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
