# Base stage: Install dependencies and build the app
FROM node:20-alpine AS base
WORKDIR /usr/src/app

# Install npm dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build
COPY . . 
ENV VITE_BACKEND_URL=/api
RUN npm run build

# Test stage (runs tests & exits)
FROM node:20-alpine AS test-stage
WORKDIR /usr/src/app
COPY --from=base /usr/src/app /usr/src/app
RUN npm test -- --run

# Production stage: Serve built frontend using Nginx
FROM nginx:1.20-alpine AS production-stage

# Copy built assets from the "base" stage
COPY --from=base /usr/src/app/dist /usr/share/nginx/html
