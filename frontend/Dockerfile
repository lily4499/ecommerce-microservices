# Stage 1: Build the React app
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Ensure necessary directories have the correct permissions
USER root
RUN mkdir -p /var/cache/nginx /var/run /etc/nginx/conf.d && \
    chown -R nginx:nginx /var/cache/nginx /var/run /etc/nginx/conf.d

# Switch to nginx user for security best practices
USER nginx

# Expose the default Nginx port
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

