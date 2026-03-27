import os
from pathlib import Path

from jinja2 import Environment, FileSystemLoader


def nginx_conf(env, template_vars):
    path = Path("/etc/nginx/nginx.conf")
    template = env.get_template(f"{path.name}.j2")
    config = template.render(template_vars)
    path.write_text(config)

def sites_default_conf(env, template_vars):
    path = Path("/etc/nginx/includes/sites-default.conf")
    template = env.get_template(f"{path.name}.j2")
    config = template.render(template_vars)
    path.write_text(config)

def prepare_template_vars(environ):
    return {
        "SERVER_HOSTNAME": environ.get("SERVER_HOSTNAME", ""),
    }

def main():
    env = Environment(loader=FileSystemLoader("./etc/nginx/conf.d/templates"))

    print("Render config")
    template_vars = prepare_template_vars(os.environ)
    nginx_conf(env, template_vars)
    sites_default_conf(env, template_vars)


if __name__ == "__main__":
    main()
