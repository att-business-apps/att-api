FROM node:lts-alpine as build-stage
RUN echo "fs.inotify.max_user_instances=524288" >> /etc/sysctl.conf
WORKDIR /app
RUN npm install -g pm2
COPY package*.json ./
RUN npm install
COPY . .
USER root
EXPOSE 1111
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--watch"]