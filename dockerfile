FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# === Producción ===
FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.js ./

RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
