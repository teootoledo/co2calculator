#STEP 1 - BUILD OF REACT APP PROJECT
FROM node:12-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

#STEP 2 - CREATE NGINX SERVER
FROM nginx:1.19.8-alpine AS prod-stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]