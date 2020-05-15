FROM ruby:2.6.3

RUN apt-get update -qq && \
      apt-get install -y build-essential \
      libpq-dev \
      nodejs

RUN mkdir /app
WORKDIR /app

RUN gem install bundler
RUN bundle config set path 'vendor/bundle'
