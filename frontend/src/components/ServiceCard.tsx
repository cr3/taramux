import type { Service } from "../services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {service.name}
          </h3>
          <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {service.description}
          </p>
        </div>

        <a
          className="rounded-xl border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
          href={service.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${service.name}`}
        >
          Open
        </a>
      </div>

      {(service.tags?.length ?? 0) > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {service.tags!.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center gap-3">
        <a
          className="text-sm font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-200"
          href={service.href}
          target="_blank"
          rel="noreferrer"
        >
          {new URL(service.href).host}
        </a>

        {service.github && (
          <>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <a
              className="text-sm font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-200"
              href={service.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </>
        )}
      </div>
    </div>
  );
}
