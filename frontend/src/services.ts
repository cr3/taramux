export type Service = {
  id: string;
  name: string;
  description: string;
  href: string;
  github?: string;
  tags?: string[];
};

export const services: Service[] = [
  {
    id: "mail",
    name: "Mail",
    description: "Email for taram.ca (accounts, aliases, admin).",
    href: "https://mail.taram.ca",
    github: "https://github.com/cr3/taramail",
    tags: ["email", "infra"],
  },
  {
    id: "wiki",
    name: "Wiki",
    description: "Docs and knowledge base for the Taram ecosystem.",
    href: "https://wiki.taram.ca",
    github: "https://github.com/cr3/tarawiki",
    tags: ["docs"],
  },
  {
    id: "status",
    name: "Status",
    description: "Live service health and incidents.",
    href: "https://status.taram.ca",
    github: "https://github.com/cr3/taramonit",
    tags: ["monitoring", "observability"],
  },
];
