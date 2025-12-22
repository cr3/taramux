import { services } from "./services";
import { ServiceCard } from "./components/ServiceCard";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <header className="mx-auto max-w-6xl px-6 pt-14">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h1 className="text-3xl font-bold tracking-tight">taram.ca</h1>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
            A portal to the services running under taram.ca subdomains.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight">Services</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            {services.length} online destinations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        <footer className="mt-12 pb-10 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>© {new Date().getFullYear()} taram.ca</span>
            <span className="text-zinc-300 dark:text-zinc-800">•</span>
            <a className="hover:underline" href="https://github.com/YOUR_ORG" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
