#! /usr/bin/env bash

sudo rsync -vrtp ericfortmeyer.dev/public/ /var/www/html/
suod mv server/nginx.conf /etc/nginx/sites-available/ericfortmeyer.conf

