# build environment
FROM node:13-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./

# production environment
FROM nginx:stable-alpine
COPY --from=build /app /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx /etc/nginx/certs
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
