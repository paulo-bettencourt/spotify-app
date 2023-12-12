# Stage 1: Build the Angular app
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Stage 2: Create the production image
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY dist/spotify-app/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
