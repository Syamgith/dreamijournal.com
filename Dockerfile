# Use Node.js as the base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Use a minimal Node.js runtime for production
FROM node:18-alpine AS runner
WORKDIR /app

# Copy the build files from the builder stage
COPY --from=builder /app ./

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
