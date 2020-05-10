FROM ruby:2.6.3

RUN apt-get update -qq && \
      apt-get install -y build-essential \
      libpq-dev \
      nodejs

RUN mkdir /app
ENV APP_ROOT /app
WORKDIR $APP_ROOT

ADD ./Gemfile $APP_ROOT/Gemfile
ADD ./Gemfile.lock $APP_ROOT/Gemfile.lock

RUN gem install bundler
RUN bundle config set path vendor/bundle
RUN bundle install
ADD . $APP_ROOT
