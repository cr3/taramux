#!/bin/sh

SSL_DIR=/etc/ssl/taramux

cp /etc/letsencrypt/live/${SERVER_HOSTNAME}/fullchain.pem ${SSL_DIR}/cert.pem
cp /etc/letsencrypt/live/${SERVER_HOSTNAME}/privkey.pem ${SSL_DIR}/key.pem
cp -a /etc/letsencrypt/live/* ${SSL_DIR}/.
