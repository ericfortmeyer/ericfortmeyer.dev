#! /usr/bin/env bash

sudo rsync -vrtp ericfortmeyer.dev/public/ /var/www/html/
sudo mv server/nginx.conf /etc/nginx/sites-available/ericfortmeyer.conf

