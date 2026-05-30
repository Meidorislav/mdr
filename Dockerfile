# Build stage
FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Production stage
FROM caddy:2-alpine
COPY --from=build /app/dist /var/www/dist
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80 443
