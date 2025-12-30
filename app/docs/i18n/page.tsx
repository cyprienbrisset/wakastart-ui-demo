"use client"

import { Section } from "@/components/docs/section"
import { CodeBlock } from "@/components/docs/code-block"

export default function I18nPage() {
  return (
    <article className="w-full">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Internationalisation</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Guide pour configurer le support multilingue avec @wakastellar/ui.
        </p>
      </header>

      <Section id="overview" title="Vue d'ensemble">
        <p className="text-muted-foreground mb-4">
          @wakastellar/ui intègre un système d'internationalisation basé sur i18next.
          Il supporte le chargement dynamique des traductions depuis des fichiers JSON externes.
        </p>
      </Section>

      <Section id="configuration" title="Configuration de base">
        <p className="text-muted-foreground mb-4">
          Configurez les langues supportées dans le WakaProvider :
        </p>
        <CodeBlock
          code={`<WakaProvider
  config={{
    language: {
      defaultLanguage: "fr",
      supportedLanguages: ["fr", "en", "de"],
      languages: [
        {
          code: "fr",
          label: "Français",
          flagEmoji: "🇫🇷",
          translations: {
            common: {
              search: "Rechercher...",
              save: "Enregistrer",
              cancel: "Annuler",
            },
          },
        },
        {
          code: "en",
          label: "English",
          flagEmoji: "🇬🇧",
          translations: {
            common: {
              search: "Search...",
              save: "Save",
              cancel: "Cancel",
            },
          },
        },
      ],
    },
  }}
>
  {children}
</WakaProvider>`}
          language="tsx"
        />
      </Section>

      <Section id="language-selector" title="Sélecteur de langue">
        <p className="text-muted-foreground mb-4">
          Utilisez le composant LanguageSelector pour permettre aux utilisateurs de changer de langue :
        </p>
        <CodeBlock
          code={`import { LanguageSelector } from "@wakastellar/ui"

// Version complète
<LanguageSelector />

// Version compacte
<LanguageSelector variant="compact" />`}
          language="tsx"
        />
      </Section>

      <Section id="load-from-json" title="Chargement depuis JSON">
        <p className="text-muted-foreground mb-4">
          Chargez les traductions dynamiquement depuis des fichiers JSON externes :
        </p>
        <CodeBlock
          code={`const languages = [
  {
    code: "fr",
    label: "Français",
    flagEmoji: "🇫🇷",
    // URL vers le fichier JSON des traductions
    jsonUrl: "https://cdn.example.com/i18n/fr.json",
  },
  {
    code: "en",
    label: "English",
    flagEmoji: "🇬🇧",
    jsonUrl: "https://cdn.example.com/i18n/en.json",
  },
]

<WakaProvider config={{ language: { languages } }}>
  {children}
</WakaProvider>`}
          language="tsx"
        />

        <p className="text-muted-foreground mt-4 mb-4">
          Structure du fichier JSON de traductions :
        </p>
        <CodeBlock
          filename="fr.json"
          code={`{
  "common": {
    "search": "Rechercher...",
    "save": "Enregistrer",
    "cancel": "Annuler",
    "confirm": "Confirmer",
    "delete": "Supprimer"
  },
  "auth": {
    "login": "Connexion",
    "logout": "Déconnexion",
    "email": "Email",
    "password": "Mot de passe"
  },
  "errors": {
    "required": "Ce champ est requis",
    "invalid_email": "Email invalide"
  }
}`}
          language="json"
        />
      </Section>

      <Section id="use-language-hook" title="Hook useLanguage">
        <p className="text-muted-foreground mb-4">
          Accédez à la langue actuelle et aux fonctions de traduction :
        </p>
        <CodeBlock
          code={`import { useLanguage } from "@wakastellar/ui"

function MyComponent() {
  const {
    language,        // Code de la langue actuelle ("fr", "en", etc.)
    setLanguage,     // Changer de langue
    languages,       // Liste des langues disponibles
    t,               // Fonction de traduction
  } = useLanguage()

  return (
    <div>
      <p>Langue actuelle : {language}</p>
      <p>{t("common.search")}</p>
      <button onClick={() => setLanguage("en")}>
        Switch to English
      </button>
    </div>
  )
}`}
          language="tsx"
        />
      </Section>

      <Section id="translation-function" title="Fonction de traduction">
        <p className="text-muted-foreground mb-4">
          La fonction t() supporte l'interpolation et les pluriels :
        </p>
        <CodeBlock
          code={`// Traduction simple
t("common.save") // "Enregistrer"

// Avec interpolation
t("greeting", { name: "Jean" }) // "Bonjour Jean !"
// JSON: { "greeting": "Bonjour {{name}} !" }

// Avec namespace
t("auth:login") // "Connexion"

// Valeur par défaut
t("missing.key", "Valeur par défaut")`}
          language="tsx"
        />
      </Section>

      <Section id="namespaces" title="Namespaces">
        <p className="text-muted-foreground mb-4">
          Organisez vos traductions par namespace :
        </p>
        <CodeBlock
          code={`// Structure des traductions
{
  "common": { ... },
  "auth": { ... },
  "dashboard": { ... },
  "errors": { ... }
}

// Utilisation
t("common:search")      // Namespace explicite
t("auth:login")
t("dashboard:welcome")`}
          language="tsx"
        />
      </Section>

      <Section id="persist-language" title="Persistance">
        <p className="text-muted-foreground mb-4">
          La langue sélectionnée est automatiquement sauvegardée dans le localStorage
          et restaurée au rechargement de la page.
        </p>
        <CodeBlock
          code={`// La clé localStorage utilisée est "waka-language"
// Vous pouvez la personnaliser si nécessaire

<WakaProvider
  config={{
    language: {
      storageKey: "my-app-language", // Clé personnalisée
      defaultLanguage: "fr",
    },
  }}
>`}
          language="tsx"
        />
      </Section>
    </article>
  )
}
