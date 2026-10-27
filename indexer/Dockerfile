# Built from the repository root: docker build -f indexer/Dockerfile .
FROM node:22-alpine
RUN npm install -g pnpm@10.33.4
WORKDIR /repo
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY sdk/package.json sdk/
COPY indexer/package.json indexer/
COPY web/package.json web/
COPY examples/package.json examples/
RUN pnpm install --frozen-lockfile --filter auctionflow-indexer...
COPY --chown=node:node indexer indexer
RUN chown node:node /repo/indexer
WORKDIR /repo/indexer
USER node
EXPOSE 42069
# DATABASE_URL, DATABASE_SCHEMA and PONDER_RPC_URL_84532 come from the environment.
CMD ["pnpm", "exec", "ponder", "start", "--port", "42069"]
