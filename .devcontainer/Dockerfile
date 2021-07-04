ARG VARIANT="3.13"
ARG NODE_VERSION="lts/*"
FROM mcr.microsoft.com/vscode/devcontainers/base:alpine-${VARIANT}
RUN apk add --update npm
RUN npm install -g typescript ts-node
