#!/bin/bash
cd frontend
yarn build
cd ../api
pkill -f puma
bundle exec rails s -e production
exit
