# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose the port specified in .env
EXPOSE 8082

# Start the app
CMD ["node", "src/index.js"]

