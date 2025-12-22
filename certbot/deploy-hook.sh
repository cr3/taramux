#!/bin/sh

# Configuration
LE_DIR=/etc/letsencrypt

# Copy primary private key and full chain to live directory
cp ${LE_DIR}/live/${SERVER_HOSTNAME}/privkey.pem ${LE_DIR}/live/privkey.pem
cp ${LE_DIR}/live/${SERVER_HOSTNAME}/fullchain.pem ${LE_DIR}/live/fullchain.pem

# Create a combined file for HAProxy
for live_dir in ${LE_DIR}/live/*; do
  cat ${LIVE_DIR}/privkey.pem ${LIVE_DIR}/cert.pem > ${LIVE_DIR}/combined.pem
done
