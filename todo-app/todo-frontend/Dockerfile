FROM node:20-alpine AS base
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build
COPY . . 
RUN npm run build

# Test stage (runs tests & exits)
FROM node:20-alpine AS test-stage
WORKDIR /usr/src/app
COPY --from=base /usr/src/app /usr/src/app
RUN npm test -- --run

# Production stage (only keeps production dependencies)
FROM node:20-alpine AS production-stage
WORKDIR /usr/src/app

# Copy package files and install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy built assets from base
COPY --from=base /usr/src/app/dist /usr/share/nginx/html
