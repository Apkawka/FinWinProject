FROM node:16.5.0-alpine AS build
ENV NODE_ENV production

WORKDIR /app

COPY package.json .

RUN npm install --force

COPY . .

RUN npm run build


FROM nginx:1.23.2-alpine as production
ENV NODE_ENV production

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]