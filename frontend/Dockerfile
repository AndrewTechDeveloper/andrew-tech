FROM node:12.8.0-alpine

WORKDIR /app

RUN apk update \
  && apk --no-cache add git ca-certificates wget vim

RUN wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
  && wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.30-r0/glibc-2.30-r0.apk \
  && apk --no-cache add glibc-2.30-r0.apk

COPY frontend/package.json .
COPY frontend/yarn.lock .
RUN npm rebuild node-sass
