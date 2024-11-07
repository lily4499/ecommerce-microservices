# Stage 1: Build the React app
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Node.js
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/build .

# Install a lightweight HTTP server to serve static files
RUN npm install -g serve

# Serve the app on port 3000
CMD ["serve", "-s", ".", "-l", "3000"]
