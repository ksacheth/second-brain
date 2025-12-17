FROM oven/bun:canary-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lock ./
RUN bun install

# Copy the rest of the application code
COPY . .

# Default port (Railway or local)
ENV PORT=3000
EXPOSE 3000

# Start the application
CMD ["bun", "run", "index.js"]