FROM node:latest

RUN npm i -g truffle
RUN npm i -g @openzeppelin/contracts
WORKDIR /home/app
RUN mkdir build
RUN chown node:node build
USER node
ENV PORT 3000

EXPOSE 3000

ENTRYPOINT /bin/bash
