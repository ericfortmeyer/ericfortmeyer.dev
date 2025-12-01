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
  	"$HOME/Projects/$PROJECT_CATEGORY/$HOSTNAME/" "$USER@$SERVER_HOSTNAME:$HOME/$HOSTNAME/"
ssh "$USER@$SERVER_HOSTNAME" "bash --login --restricted -s" < ./scripts/install.bash
