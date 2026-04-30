Taram Demultiplexer
===================

.. image:: https://github.com/taradix/taramux/workflows/test/badge.svg
       :target: https://github.com/taradix/taramux/actions
.. image:: https://github.com/taradix/taramux/workflows/deploy/badge.svg
       :target: https://taram.ca

Proxy requests for taram.ca and lesjardinsdudore.ca.

Setup
-----

Copy ``.env.example`` to ``.env`` and fill in the values:

.. code-block:: text

    cp .env.example .env

Generate a gateway token:

.. code-block:: text

    echo "OPENCLAW_GATEWAY_TOKEN=$(openssl rand -hex 32)" >> .env

Create a Telegram bot via `@BotFather <https://t.me/BotFather>`_:

1. Send ``/newbot`` and follow the prompts.
2. Copy the bot token (format: ``123456789:AAF...``).
3. Set it in ``.env``: ``TELEGRAM_BOT_TOKEN=<token>``

Set your Anthropic API key in ``.env``: ``ANTHROPIC_API_KEY=sk-ant-...``

Deploy:

.. code-block:: text

    make deploy

Approve yourself as a Telegram user on first run — send ``/start`` to
your bot, then run:

.. code-block:: text

    docker compose exec openclaw node dist/index.js pairing list telegram
    docker compose exec openclaw node dist/index.js pairing approve telegram <CODE>
