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
    id: "lists",
    href: "https://lists.taram.ca",
    code: "https://github.com/taradix/taralists",
  },
  {
    id: "mail",
    href: "https://mail.taram.ca",
    code: "https://github.com/taradix/taramail",
  },
  {
    id: "meteo",
    href: "https://meteo.taram.ca",
    code: "https://github.com/taradix/tarameteo",
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
