FROM node:18-alpine AS build
WORKDIR /skillbridge-frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN npm run build
FROM nginx:alpine
COPY --from=build /skillbridge-frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]