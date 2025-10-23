# 1.- Build
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@10.18.2 --activate

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json .npmrc ./
COPY back ./back
COPY patches ./patches

RUN pnpm install --filter back...

RUN pnpm back:build

# 2.- Runtime
FROM node:22-alpine AS runner

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.18.2 --activate

COPY --from=builder /app/back ./back
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-workspace.yaml ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/.npmrc ./

RUN mkdir -p /app/back/.tmp 

VOLUME ["/app/back/.tmp"]

EXPOSE 1337

CMD ["pnpm", "back:start"]
