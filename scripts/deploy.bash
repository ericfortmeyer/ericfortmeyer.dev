#! /usr/bin/env bash

rsync \
  --progress \
  --verbose \
  --compress \
  --recursive \
  -e "ssh -o StrictHostKeyChecking=no" \
  ~/Projects/ericfortmeyer/ericfortmeyer.dev/public/* root@baruq:/var/www/html/