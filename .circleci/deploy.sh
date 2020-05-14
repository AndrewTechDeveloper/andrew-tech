#!/bin/bash
git pull origin master
cd frontend
yarn build
cd ../api
pkill -f puma
bundle exec rails s -e production
exit
