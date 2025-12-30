FROM node:20-alpine AS base

# Installer pnpm
RUN npm install -g pnpm

# ====== ÉTAPE 1: Construire la librairie parent ======
FROM base AS library-builder
WORKDIR /workspace

# Copier tout le workspace parent (librairie)
COPY ../ .

# Installer les dépendances et construire la librairie
RUN pnpm install --frozen-lockfile
RUN pnpm build

# ====== ÉTAPE 2: Construire la démo ======
FROM base AS demo-builder
WORKDIR /app

# Copier la librairie construite depuis library-builder
COPY --from=library-builder /workspace/dist /workspace/dist
COPY --from=library-builder /workspace/package.json /workspace/package.json
COPY --from=library-builder /workspace/src /workspace/src

# Copier les fichiers de la démo
COPY package.json pnpm-lock.yaml* ./
COPY . .

# Installer les dépendances de la démo
RUN pnpm install --frozen-lockfile

# Build de l'application Next.js
RUN pnpm build

# ====== ÉTAPE 3: Image de production avec Google Fonts ======
FROM node:20 AS runner
WORKDIR /app

# Installer pnpm et les outils nécessaires
RUN npm install -g pnpm

# Installer Google Fonts
RUN apt-get update && apt-get install -y \
  wget unzip fontconfig \
  && mkdir -p /usr/share/fonts/truetype/google-fonts \
  && wget -q https://github.com/google/fonts/archive/refs/heads/main.zip -O /tmp/fonts.zip \
  && unzip -qq /tmp/fonts.zip -d /tmp/google-fonts \
  && find /tmp/google-fonts -type f -iname "*.ttf" -exec mv {} /usr/share/fonts/truetype/google-fonts/ \; \
  && fc-cache -fv \
  && rm -rf /tmp/fonts.zip /tmp/google-fonts /var/lib/apt/lists/*

# Copier node_modules et les fichiers buildés depuis demo-builder
COPY --from=demo-builder /app/node_modules ./node_modules
COPY --from=demo-builder /app/.next ./.next
COPY --from=demo-builder /app/public ./public
COPY --from=demo-builder /app/package.json ./package.json
COPY --from=demo-builder /app/next.config.* ./

# Créer un utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs \
  && chown -R nextjs:nodejs /app

USER nextjs

# Exposer le port
EXPOSE 3000

# Variables d'environnement
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Démarrer l'application
CMD ["pnpm", "start"]
