#! /usr/bin/env bash

HOSTNAME=ericfortmeyer.dev

rsync \
  --progress \
  --verbose \
  --compress \
  --recursive \
  -e "ssh -o StrictHostKeyChecking=no" \
  ~/Projects/ericfortmeyer/$HOSTNAME/ root@baruq:$HOME/$HOSTNAME/
