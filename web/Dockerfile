# Built from the repository root: docker build -f web/Dockerfile .
FROM node:22-alpine AS deps
RUN npm install -g pnpm@10.33.4
WORKDIR /repo
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY sdk/package.json sdk/
COPY indexer/package.json indexer/
COPY web/package.json web/
COPY examples/package.json examples/
RUN pnpm install --frozen-lockfile --filter auctionflow-web...

FROM deps AS build
COPY sdk sdk
COPY web web
# NEXT_PUBLIC_* values are compiled into the browser bundle at build time.
ARG NEXT_PUBLIC_CHAIN_ID=84532
ARG NEXT_PUBLIC_RPC_URL=
ARG NEXT_PUBLIC_IPFS_GATEWAY=https://ipfs.io/ipfs/
ENV NEXT_PUBLIC_CHAIN_ID=$NEXT_PUBLIC_CHAIN_ID \
    NEXT_PUBLIC_RPC_URL=$NEXT_PUBLIC_RPC_URL \
    NEXT_PUBLIC_IPFS_GATEWAY=$NEXT_PUBLIC_IPFS_GATEWAY \
    NEXT_TELEMETRY_DISABLED=1
RUN pnpm --filter auctionflow-sdk build && pnpm --filter auctionflow-web build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3000 HOSTNAME=0.0.0.0
COPY --from=build --chown=node:node /repo/web/.next/standalone ./
COPY --from=build --chown=node:node /repo/web/.next/static ./web/.next/static
USER node
EXPOSE 3000
CMD ["node", "web/server.js"]
