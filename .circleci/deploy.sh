#!/bin/bash
cd apps/andrew-tech
git pull
cd frontend
yarn build
cd ./api
pkill -f puma
bundle exec rails s -e production
exit
