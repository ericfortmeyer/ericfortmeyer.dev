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
	--exclude ".idea" \
  	"$HOME/projects/$PROJECT_CATEGORY/$HOSTNAME/" "$SERVER_HOSTNAME:./$HOSTNAME/"
ssh "$USER@$SERVER_HOSTNAME" "bash --login --restricted -s" < ./scripts/install.bash
