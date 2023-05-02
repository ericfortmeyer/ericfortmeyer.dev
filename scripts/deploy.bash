#! /usr/bin/env bash

HOSTNAME=ericfortmeyer.dev
PROJECT_CATEGORY=ericfortmeyer
SERVER_HOSTNAME=baruq

rsync \
	--verbose \
  	--progress \
	--times \
	--perms \
  	--compress \
  	--recursive \
	--exclude ".git" \
  	-e "ssh -o StrictHostKeyChecking=no" \
  	"$HOME/Projects/$PROJECT_CATEGORY/$HOSTNAME/" "$USER@$SERVER_HOSTNAME:$HOME/$HOSTNAME/"
