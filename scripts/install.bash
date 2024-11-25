#! /usr/bin/env bash

HOSTNAME=ericfortmeyer.dev

sudo rsync \
	--verbose \
	--times \
	--perms \
	--progress \
	--recursive \
	--exclude ".idea" \
	--exclude "scripts" \
	--exclude "server" \
	"$HOME/$HOSTNAME/public/" "/var/www/html/"
sudo cp "$HOME/$HOSTNAME/server/nginx.conf" "/etc/nginx/sites-available/$HOSTNAME"

