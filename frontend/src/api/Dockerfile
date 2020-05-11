FROM ruby:2.6.3

RUN apt-get update -qq && \
      apt-get install -y build-essential \
      libpq-dev \
      nodejs

RUN apt-get update -qq && apt-get install -y nodejs wget vim

ENV ENTRYKIT_VERSION 0.4.0
RUN wget https://github.com/progrium/entrykit/releases/download/v${ENTRYKIT_VERSION}/entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
  && tar -xvzf entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
  && rm entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
  && mv entrykit /bin/entrykit \
  && chmod +x /bin/entrykit \
  && entrykit --symlink

RUN mkdir /app
ENV APP_ROOT /app
WORKDIR $APP_ROOT

ADD ./api/Gemfile $APP_ROOT/Gemfile
ADD ./api/Gemfile.lock $APP_ROOT/Gemfile.lock

RUN gem install bundler
RUN bundle config set path vendor/bundle
RUN bundle install
ENTRYPOINT ["prehook", "bundle install", "--"]
