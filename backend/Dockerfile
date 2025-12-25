FROM oven/bun:alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lock ./
RUN bun install

# Copy the rest of the application code
COPY . .

# Default port (Railway or local)
EXPOSE 3002

# Start the application
CMD ["bun", "run", "src/index.js"]