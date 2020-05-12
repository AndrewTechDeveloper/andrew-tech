FROM ruby:2.6.3

RUN apt-get update -qq && \
      apt-get install -y build-essential \
      libpq-dev \
      nodejs

RUN apt-get update -qq && apt-get install -y nodejs wget vim

RUN mkdir /app
ENV APP_ROOT /app
WORKDIR $APP_ROOT

ADD ./api/Gemfile $APP_ROOT/Gemfile
ADD ./api/Gemfile.lock $APP_ROOT/Gemfile.lock

RUN gem install bundler
RUN bundle config set path vendor/bundle
RUN bundle install
