export type Service = {
  id: string;
  href: string;
  code?: string;
};

export const services: Service[] = [
  {
    id: "mail",
    href: "https://mail.taram.ca",
    code: "https://github.com/cr3/taramail",
  },
  {
    id: "wiki",
    href: "https://wiki.taram.ca",
    code: "https://github.com/cr3/tarawiki",
  },
  {
    id: "status",
    href: "https://status.taram.ca",
    code: "https://github.com/cr3/taramonit",
  },
];
