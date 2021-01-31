FROM node:12.14.0-slim
RUN apt update && apt upgrade -y && \
    apt install gcc g++ make python git libc6-dev build-essential libpng-dev \
    libjpeg-dev libvips-dev libvips musl-dev node-gyp pngquant webp -y
RUN yarn global add gatsby-cli
# The port gatsby runs on
EXPOSE 8000
WORKDIR /myapp
COPY ./package.json /myapp
COPY ./yarn.lock /myapp
RUN yarn install && yarn cache clean
COPY . /myapp
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]