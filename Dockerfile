FROM node:20-alpine AS base

# Installer pnpm
RUN npm install -g pnpm

# ====== ÉTAPE 1: Builder ======
FROM base AS builder
WORKDIR /app

# Copier les fichiers de configuration
COPY package.json pnpm-lock.yaml* ./

# Configurer le registre npm privé si nécessaire
# ARG NPM_TOKEN
# RUN echo "//npm.cyprienbrisset.fr/:_authToken=${NPM_TOKEN}" > .npmrc

# Installer les dépendances
RUN pnpm install

# Copier le reste des fichiers
COPY . .

# Build de l'application Next.js
RUN pnpm build

# ====== ÉTAPE 2: Runner ======
FROM node:20-alpine AS runner
WORKDIR /app

# Installer pnpm
RUN npm install -g pnpm

# Variables d'environnement
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Créer un utilisateur non-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copier les fichiers nécessaires depuis le builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Changer les permissions
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
