FROM node:lts-alpine as buildStage 
WORKDIR /app
COPY package.json .
RUN npm i 
COPY . . 
RUN npm run build

FROM nginx:alpine
COPY --from=buildStage /app/build /usr/share/nginx/html
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf 