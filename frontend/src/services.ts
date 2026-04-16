export type Service = {
  id: string;
  href: string;
  code?: string;
};

export const services: Service[] = [
  {
    id: "chat",
    href: "https://chat.taram.ca",
    code: "https://github.com/taradix/tarachat",
  },
  {
    id: "mail",
    href: "https://mail.taram.ca",
    code: "https://github.com/taradix/taramail",
  },
  {
    id: "lists",
    href: "https://lists.taram.ca",
    code: "https://github.com/taradix/taralists",
  },
  {
    id: "wiki",
    href: "https://wiki.taram.ca",
    code: "https://github.com/taradix/tarawiki",
  },
  {
    id: "status",
    href: "https://status.taram.ca",
    code: "https://github.com/taradix/taramonit",
  },
];
