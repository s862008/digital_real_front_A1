#
# Build stage
#
FROM node:20.16.0 as node
WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build --prod

#
# Deploy stage
#
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /usr/src/app/dist/browser /usr/share/nginx/html
