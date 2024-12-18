FROM node:18.16.0-buster-slim AS build

RUN apt-get update  && \
    apt-get install -y \
        apt-utils \
        python \
        g++ \
        make \
        gcc

FROM build AS install
ARG git_hash
ARG node_env
ARG version
ENV GIT_HASH=${git_hash}
ENV NODE_ENV=${node_env}
ENV VERSION=${version}

COPY ./package* /app/
COPY ./.npmrc /app/
WORKDIR /app
RUN npm ci --save-dev --production=false
COPY . ./

RUN npx webpack --config webpack.config.cjs && \
    rm -rf node_modules

FROM node:18.16.0-buster-slim
ARG git_hash
ARG node_env
ARG version
ENV TINI_VERSION=v0.19.0
ENV GIT_HASH=${git_hash}
ENV NODE_ENV=${node_env}
ENV VERSION=${version}

RUN apt-get update && apt-get install -y curl
COPY ./package* /app/
WORKDIR /app
RUN npm ci --production || npm ci --production
COPY . ./
COPY --from=install /app/dist/public/js/main.js /app/dist/public/js/
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

USER node
CMD ["npm", "run", "start"]
#CMD ["VERSION=wtf", "node", "--trace-warnings", "--unhandled-rejections=strict", "./bin/server"]
