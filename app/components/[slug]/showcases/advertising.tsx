"use client"

import * as React from "react"
import { useState } from "react"
import {
  WakaAdProvider,
  WakaAdBanner,
  WakaAdSidebar,
  WakaAdInline,
  WakaAdInterstitial,
  WakaAdStickyFooter,
  WakaSponsoredCard,
  WakaSponsoredFeed,
  WakaContentRecommendation,
  WakaVideoAd,
  WakaOutstreamVideo,
  WakaVideoOverlay,
  WakaAdPlaceholder,
  WakaAdFallback,
  WakaSponsoredBadge,
  AD_SIZES,
  Button,
} from "@wakastellar/ui"
import { ComponentShowcaseConfig } from "./types"

// Mock ad config for demos
const mockAdConfig = {
  network: "custom" as const,
  customConfig: {
    baseUrl: "https://api.example.com/ads",
    apiKey: "demo-key",
  },
  debug: true,
}

// ==================== Provider ====================

export const adProviderShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Provider de base",
      description: "Configuration du contexte publicitaire pour l'application",
      preview: (
        <div className="p-4 border rounded-lg bg-muted/30">
          <p className="text-sm text-muted-foreground mb-2">
            Le WakaAdProvider doit envelopper votre application :
          </p>
          <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
{`<WakaAdProvider
  config={{
    network: "custom",
    customConfig: { baseUrl: "...", apiKey: "..." }
  }}
>
  <App />
</WakaAdProvider>`}
          </pre>
        </div>
      ),
      code: `import { WakaAdProvider } from "@wakastellar/ui"

const adConfig = {
  network: "custom",
  customConfig: {
    baseUrl: "https://api.example.com/ads",
    apiKey: "your-api-key",
  },
  debug: process.env.NODE_ENV === "development",
}

export function App() {
  return (
    <WakaAdProvider
      config={adConfig}
      onEvent={(event) => console.log("Ad event:", event)}
    >
      <YourApp />
    </WakaAdProvider>
  )
}`,
    },
  ],
}

// ==================== Display Ads ====================

export const adBannerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Bannières standards",
      description: "Différentes tailles de bannières publicitaires",
      preview: (
        <WakaAdProvider config={mockAdConfig}>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Leaderboard (728x90)</p>
              <WakaAdPlaceholder size="leaderboard" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Medium Rectangle (300x250)</p>
              <WakaAdPlaceholder size="rectangle" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Mobile Banner (320x50)</p>
              <WakaAdPlaceholder size="mobile-banner" />
            </div>
          </div>
        </WakaAdProvider>
      ),
      code: `import { WakaAdBanner } from "@wakastellar/ui"

// Leaderboard
<WakaAdBanner slotId="slot-leaderboard" size="leaderboard" />

// Medium Rectangle
<WakaAdBanner slotId="slot-rectangle" size="rectangle" />

// Mobile Banner
<WakaAdBanner slotId="slot-mobile" size="mobile-banner" />`,
    },
    {
      title: "Avec rafraîchissement automatique",
      description: "La bannière se rafraîchit automatiquement",
      preview: (
        <WakaAdProvider config={mockAdConfig}>
          <div className="flex flex-col items-center">
            <WakaAdPlaceholder size="rectangle" animated />
            <p className="text-xs text-muted-foreground mt-2">
              Rafraîchissement toutes les 30 secondes
            </p>
          </div>
        </WakaAdProvider>
      ),
      code: `<WakaAdBanner
  slotId="slot-1"
  size="rectangle"
  refreshInterval={30}
  showBadge
/>`,
    },
  ],
}

export const adSidebarShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Sidebar sticky",
      description: "Publicité qui reste visible au scroll",
      preview: (
        <WakaAdProvider config={mockAdConfig}>
          <div className="flex gap-4 h-[400px] overflow-hidden">
            <div className="flex-1 p-4 border rounded-lg bg-muted/30 overflow-y-auto">
              <p className="text-sm mb-4">Contenu principal de la page...</p>
              {Array.from({ length: 10 }).map((_, i) => (
                <p key={i} className="text-sm text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              ))}
            </div>
            <div className="w-[300px] relative">
              <WakaAdPlaceholder size="rectangle" showLabel />
            </div>
          </div>
        </WakaAdProvider>
      ),
      code: `<div className="flex gap-4">
  <main className="flex-1">
    {/* Votre contenu */}
  </main>
  <aside className="w-[300px]">
    <WakaAdSidebar
      slotId="sidebar-ad"
      sticky
      stickyOffset={80}
      showRelated
    />
  </aside>
</div>`,
    },
  ],
}

export const adInlineShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Publicité dans le contenu",
      description: "Intégration naturelle dans le flux de lecture",
      preview: (
        <WakaAdProvider config={mockAdConfig}>
          <div className="max-w-2xl mx-auto space-y-4 p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">
              Premier paragraphe de l'article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-sm text-muted-foreground">
              Deuxième paragraphe. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="my-6">
              <WakaAdPlaceholder size="rectangle" />
            </div>

            <p className="text-sm text-muted-foreground">
              Suite de l'article après la publicité. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </WakaAdProvider>
      ),
      code: `<article>
  <p>Premier paragraphe...</p>
  <p>Deuxième paragraphe...</p>

  <WakaAdInline
    slotId="inline-ad"
    position="center"
    margin="lg"
  />

  <p>Suite de l'article...</p>
</article>`,
    },
  ],
}

function InterstitialDemo() {
  const [open, setOpen] = useState(false)

  return (
    <WakaAdProvider config={mockAdConfig}>
      <div className="text-center space-y-4">
        <Button onClick={() => setOpen(true)}>
          Afficher l'interstitiel
        </Button>
        <p className="text-xs text-muted-foreground">
          L'interstitiel s'affiche en plein écran avec un compte à rebours
        </p>
        <WakaAdInterstitial
          slotId="interstitial-1"
          open={open}
          onClose={() => setOpen(false)}
          minDisplayTime={3}
          showCountdown
        />
      </div>
    </WakaAdProvider>
  )
}

export const adInterstitialShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Interstitiel plein écran",
      description: "Publicité modale avec compte à rebours",
      preview: <InterstitialDemo />,
      code: `import { WakaAdInterstitial } from "@wakastellar/ui"

const [showInterstitial, setShowInterstitial] = useState(false)

<WakaAdInterstitial
  slotId="interstitial-1"
  open={showInterstitial}
  onClose={() => setShowInterstitial(false)}
  minDisplayTime={5}
  showCountdown
/>`,
    },
  ],
}

export const adStickyFooterShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Bannière sticky en bas",
      description: "Bannière fixée en bas de l'écran (mobile)",
      preview: (
        <WakaAdProvider config={mockAdConfig}>
          <div className="relative h-[300px] border rounded-lg overflow-hidden">
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                Contenu de la page. La bannière reste fixée en bas.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-background/95 border-t p-2">
              <div className="flex items-center justify-center">
                <WakaAdPlaceholder size="mobile-banner" />
              </div>
            </div>
          </div>
        </WakaAdProvider>
      ),
      code: `<WakaAdStickyFooter
  slotId="sticky-footer"
  dismissable
  showCloseAfter={3}
  animation="slide"
  safeAreaPadding
/>`,
    },
  ],
}

// ==================== Native Ads ====================

export const sponsoredCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Variantes de cartes sponsorisées",
      description: "Différents styles de cartes natives",
      preview: (
        <WakaAdProvider config={mockAdConfig}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Article</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="aspect-video bg-muted" />
                <div className="p-3">
                  <WakaSponsoredBadge size="sm" className="mb-2" />
                  <h4 className="font-medium text-sm mb-1">Titre de l'article sponsorisé</h4>
                  <p className="text-xs text-muted-foreground">Description courte du contenu...</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Product</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="aspect-square bg-muted" />
                <div className="p-3">
                  <WakaSponsoredBadge size="sm" className="mb-2" />
                  <h4 className="font-medium text-sm">Nom du produit</h4>
                  <p className="text-primary font-semibold text-sm mt-1">€29.99</p>
                </div>
              </div>
            </div>
          </div>
        </WakaAdProvider>
      ),
      code: `// Style Article
<WakaSponsoredCard
  slotId="native-1"
  variant="article"
  aspectRatio="video"
/>

// Style Product
<WakaSponsoredCard
  slotId="native-2"
  variant="product"
  aspectRatio="square"
/>

// Style Compact
<WakaSponsoredCard
  slotId="native-3"
  variant="compact"
/>

// Style Horizontal
<WakaSponsoredCard
  slotId="native-4"
  variant="horizontal"
/>`,
    },
  ],
}

export const sponsoredFeedShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Feed avec publicités intégrées",
      description: "Les publicités apparaissent naturellement dans le feed",
      preview: (
        <WakaAdProvider config={mockAdConfig}>
          <div className="space-y-3 max-h-[400px] overflow-y-auto p-1">
            {/* Feed items */}
            {[1, 2, 3, 4, 5].map((i) => (
              <React.Fragment key={i}>
                <div className="flex gap-3 p-3 border rounded-lg">
                  <div className="w-16 h-16 bg-muted rounded" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Article #{i}</h4>
                    <p className="text-xs text-muted-foreground">Description de l'article...</p>
                  </div>
                </div>
                {i === 3 && (
                  <div className="flex gap-3 p-3 border rounded-lg border-primary/20 bg-primary/5">
                    <div className="w-16 h-16 bg-muted rounded" />
                    <div className="flex-1">
                      <WakaSponsoredBadge size="sm" className="mb-1" />
                      <h4 className="font-medium text-sm">Contenu sponsorisé</h4>
                      <p className="text-xs text-muted-foreground">Découvrez notre offre...</p>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </WakaAdProvider>
      ),
      code: `import { WakaSponsoredFeed } from "@wakastellar/ui"

<WakaSponsoredFeed
  items={feedItems}
  adSlotIds={["feed-ad-1", "feed-ad-2"]}
  adFrequency={4}
  renderItem={(item) => (
    <FeedItem key={item.id} {...item} />
  )}
  onItemClick={(slotId) => console.log("Clicked:", slotId)}
/>`,
    },
  ],
}

export const contentRecommendationShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Widget de recommandations",
      description: "Style Taboola/Outbrain pour les recommandations",
      preview: (
        <WakaAdProvider config={mockAdConfig}>
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Vous aimerez aussi</h3>
              <WakaSponsoredBadge size="sm" showIcon={false} />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-video bg-muted rounded-lg mb-2 group-hover:opacity-80 transition-opacity" />
                  <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    Titre de la recommandation #{i}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">sponsor.com</p>
                </div>
              ))}
            </div>
          </div>
        </WakaAdProvider>
      ),
      code: `import { WakaContentRecommendation } from "@wakastellar/ui"

<WakaContentRecommendation
  title="Vous aimerez aussi"
  slotIds={["rec-1", "rec-2", "rec-3", "rec-4", "rec-5", "rec-6"]}
  layout="grid"
  columns={3}
  onItemClick={(slotId) => console.log("Clicked:", slotId)}
/>

// En carousel
<WakaContentRecommendation
  title="Contenu recommandé"
  slotIds={slotIds}
  layout="carousel"
  showArrows
  autoScroll
  autoScrollInterval={5}
/>`,
    },
  ],
}

// ==================== Video Ads ====================

export const videoAdShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Publicité vidéo",
      description: "Lecteur vidéo publicitaire avec contrôles",
      preview: (
        <WakaAdProvider config={mockAdConfig}>
          <div className="max-w-lg mx-auto">
            <div className="aspect-video bg-black rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/70">
                  <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center mb-2 mx-auto">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white/70 ml-1" />
                  </div>
                  <p className="text-sm">Publicité vidéo</p>
                </div>
              </div>
              {/* Skip button */}
              <div className="absolute bottom-4 right-4">
                <Button size="sm" variant="secondary" disabled>
                  Skip in 5s
                </Button>
              </div>
              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div className="h-full w-1/3 bg-primary" />
              </div>
            </div>
          </div>
        </WakaAdProvider>
      ),
      code: `import { WakaVideoAd } from "@wakastellar/ui"

<WakaVideoAd
  slotId="video-ad-1"
  autoPlay
  muted
  skipAfter={5}
  showControls
  onComplete={() => console.log("Video complete")}
  onSkip={() => console.log("Video skipped")}
/>`,
    },
  ],
}

export const outstreamVideoShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Vidéo outstream",
      description: "Vidéo qui s'affiche dans le contenu au scroll",
      preview: (
        <WakaAdProvider config={mockAdConfig}>
          <div className="space-y-4 p-4 border rounded-lg max-h-[400px] overflow-y-auto">
            <p className="text-sm text-muted-foreground">
              Scrollez pour voir la vidéo outstream apparaître...
            </p>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="aspect-video bg-black rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/70 text-sm">Vidéo outstream</p>
              </div>
              <WakaSponsoredBadge variant="dark" size="sm" className="absolute top-2 left-2" />
            </div>

            <p className="text-sm text-muted-foreground">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </WakaAdProvider>
      ),
      code: `import { WakaOutstreamVideo } from "@wakastellar/ui"

<article>
  <p>Contenu avant la vidéo...</p>

  <WakaOutstreamVideo
    slotId="outstream-1"
    triggerPoint={0.5}
    pauseOnScroll
    collapseOnComplete
    stickyOnScroll={false}
  />

  <p>Contenu après la vidéo...</p>
</article>`,
    },
  ],
}

export const videoOverlayShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Overlay sur vidéo",
      description: "Bannière publicitaire superposée à une vidéo",
      preview: (
        <WakaAdProvider config={mockAdConfig}>
          <div className="max-w-lg mx-auto">
            <div className="aspect-video bg-black rounded-lg relative overflow-hidden">
              {/* Video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/50 text-sm">Contenu vidéo</p>
              </div>

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded" />
                  <div className="flex-1">
                    <WakaSponsoredBadge variant="dark" size="sm" className="mb-0.5" />
                    <p className="text-white text-sm font-medium">Offre spéciale</p>
                  </div>
                  <Button size="sm">En savoir plus</Button>
                </div>
              </div>
            </div>
          </div>
        </WakaAdProvider>
      ),
      code: `import { WakaVideoOverlay } from "@wakastellar/ui"

// Dans votre lecteur vidéo
<div className="relative">
  <video src={videoSrc} />

  <WakaVideoOverlay
    slotId="overlay-1"
    visible={showOverlay}
    position="bottom"
    dismissable
    hideAfter={10}
    onDismiss={() => setShowOverlay(false)}
  />
</div>`,
    },
  ],
}

// ==================== Utilities ====================

export const adPlaceholderShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Placeholders de chargement",
      description: "Différentes tailles de placeholders",
      preview: (
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Rectangle (300x250)</p>
            <WakaAdPlaceholder size="rectangle" animated />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Leaderboard (728x90)</p>
            <WakaAdPlaceholder size="leaderboard" animated />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Mobile Banner (320x50)</p>
            <WakaAdPlaceholder size="mobile-banner" animated />
          </div>
        </div>
      ),
      code: `import { WakaAdPlaceholder, AD_SIZES } from "@wakastellar/ui"

// Avec animation
<WakaAdPlaceholder size="rectangle" animated />

// Sans animation
<WakaAdPlaceholder size="leaderboard" animated={false} />

// Sans label
<WakaAdPlaceholder size="mobile-banner" showLabel={false} />

// Tailles disponibles: ${Object.keys(AD_SIZES).join(", ")}`,
    },
  ],
}

export const adFallbackShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Contenus de fallback",
      description: "Affichés quand aucune publicité n'est disponible",
      preview: (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">House Ad</p>
            <WakaAdFallback
              variant="house"
              title="Découvrez nos services"
              description="Solutions sur mesure pour votre entreprise"
              ctaText="En savoir plus"
              imageUrl=""
            />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Empty State</p>
            <WakaAdFallback variant="empty" />
          </div>
        </div>
      ),
      code: `import { WakaAdFallback } from "@wakastellar/ui"

// House Ad (auto-promotion)
<WakaAdFallback
  variant="house"
  title="Découvrez nos services"
  description="Solutions sur mesure pour votre entreprise"
  ctaText="En savoir plus"
  ctaUrl="/services"
  imageUrl="/images/promo.jpg"
/>

// État vide
<WakaAdFallback variant="empty" />

// Contenu personnalisé
<WakaAdFallback variant="custom">
  <YourCustomContent />
</WakaAdFallback>`,
    },
  ],
}

export const sponsoredBadgeShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Badges sponsorisés",
      description: "Différents styles et tailles de badges",
      preview: (
        <div className="space-y-6">
          <div>
            <p className="text-xs text-muted-foreground mb-3">Variants</p>
            <div className="flex flex-wrap gap-3">
              <WakaSponsoredBadge variant="default" />
              <WakaSponsoredBadge variant="subtle" />
              <div className="bg-black p-2 rounded">
                <WakaSponsoredBadge variant="dark" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-3">Sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <WakaSponsoredBadge size="sm" />
              <WakaSponsoredBadge size="md" />
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-3">Avec sponsor</p>
            <div className="flex flex-wrap gap-3">
              <WakaSponsoredBadge sponsor="Acme Corp" />
              <WakaSponsoredBadge sponsor="Tech Inc" showIcon={false} />
            </div>
          </div>
        </div>
      ),
      code: `import { WakaSponsoredBadge } from "@wakastellar/ui"

// Variants
<WakaSponsoredBadge variant="default" />
<WakaSponsoredBadge variant="subtle" />
<WakaSponsoredBadge variant="dark" />

// Sizes
<WakaSponsoredBadge size="sm" />
<WakaSponsoredBadge size="md" />

// Avec nom du sponsor
<WakaSponsoredBadge sponsor="Acme Corp" />

// Sans icône
<WakaSponsoredBadge showIcon={false} />`,
    },
  ],
}

// Export all Advertising showcases
export const advertisingShowcases: Record<string, ComponentShowcaseConfig> = {
  // Provider
  "ad-provider": adProviderShowcase,
  // Display Ads
  "ad-banner": adBannerShowcase,
  "ad-sidebar": adSidebarShowcase,
  "ad-inline": adInlineShowcase,
  "ad-interstitial": adInterstitialShowcase,
  "ad-sticky-footer": adStickyFooterShowcase,
  // Native Ads
  "sponsored-card": sponsoredCardShowcase,
  "sponsored-feed": sponsoredFeedShowcase,
  "content-recommendation": contentRecommendationShowcase,
  // Video Ads
  "video-ad": videoAdShowcase,
  "outstream-video": outstreamVideoShowcase,
  "video-overlay": videoOverlayShowcase,
  // Utilities
  "ad-placeholder": adPlaceholderShowcase,
  "ad-fallback": adFallbackShowcase,
  "sponsored-badge": sponsoredBadgeShowcase,
}
