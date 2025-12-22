import { useTranslation } from "react-i18next";
import type { Service } from "../services";

export function ServiceCard({ service }: { service: Service }) {
  const { t } = useTranslation();
  const name = t(`service.${service.id}.name`);
  const description = t(`service.${service.id}.description`);
  const tags = t(`service.${service.id}.tags`, { returnObjects: true }) as string[];

  return (
    <div className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {name}
          </h3>
          <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {description}
          </p>
        </div>

        <a
          className="rounded-xl border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
          href={service.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${t("services.open")} ${name}`}
        >
          {t("services.open")}
        </a>
      </div>

      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
            >
              {tag}
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

        {service.code && (
          <>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <a
              className="text-sm font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-200"
              href={service.code}
              target="_blank"
              rel="noreferrer"
            >
              {t("footer.code")}
            </a>
          </>
        )}
      </div>
    </div>
  );
}
