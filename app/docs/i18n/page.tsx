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
          @wakastellar/ui intègre un système d'internationalisation basé sur <strong>i18next</strong>.
          Il supporte les traductions inline, le chargement depuis des fichiers JSON externes,
          ou depuis un bucket S3 pour les applications à grande échelle.
        </p>
      </Section>

      <Section id="inline-translations" title="Traductions inline">
        <p className="text-muted-foreground mb-4">
          La méthode la plus simple : définir les traductions directement dans la configuration :
        </p>
        <CodeBlock
          code={`import { WakaProvider } from "@wakastellar/ui"

<WakaProvider
  config={{
    language: {
      defaultLanguage: "fr",
      supportedLanguages: ["fr", "en"],
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
            auth: {
              login: "Connexion",
              logout: "Déconnexion",
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
            auth: {
              login: "Login",
              logout: "Logout",
            },
          },
        },
      ],
    },
    theme: {
      defaultTheme: "light",
      themes: [{ id: "light", label: "Clair" }],
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

// Version complète avec dropdown
<LanguageSelector />

// Version compacte (icône seule)
<LanguageSelector variant="compact" />

// Avec affichage du drapeau
<LanguageSelector showFlag />`}
          language="tsx"
        />
      </Section>

      <Section id="s3-loading" title="Chargement depuis S3">
        <p className="text-muted-foreground mb-4">
          Pour les applications à grande échelle, chargez les traductions depuis un bucket S3 :
        </p>
        <CodeBlock
          code={`<WakaProvider
  config={{
    language: {
      defaultLanguage: "fr",
      supportedLanguages: ["fr", "en", "de", "es"],
      languages: [
        { code: "fr", label: "Français", flagEmoji: "🇫🇷" },
        { code: "en", label: "English", flagEmoji: "🇬🇧" },
        { code: "de", label: "Deutsch", flagEmoji: "🇩🇪" },
        { code: "es", label: "Español", flagEmoji: "🇪🇸" },
      ],
      s3Config: {
        bucketUrl: "https://cdn.example.com",
        translationsPath: "i18n", // Chemin dans le bucket
      },
    },
  }}
>
  {children}
</WakaProvider>`}
          language="tsx"
        />
        <p className="text-muted-foreground mt-4 mb-4">
          Structure attendue dans le bucket S3 :
        </p>
        <CodeBlock
          code={`https://cdn.example.com/i18n/fr.json
https://cdn.example.com/i18n/en.json
https://cdn.example.com/i18n/de.json
https://cdn.example.com/i18n/es.json`}
          language="text"
        />
      </Section>

      <Section id="json-structure" title="Structure des fichiers JSON">
        <p className="text-muted-foreground mb-4">
          Structure des fichiers de traduction :
        </p>
        <CodeBlock
          filename="fr.json"
          code={`{
  "common": {
    "search": "Rechercher...",
    "save": "Enregistrer",
    "cancel": "Annuler",
    "confirm": "Confirmer",
    "delete": "Supprimer",
    "loading": "Chargement..."
  },
  "auth": {
    "login": "Connexion",
    "logout": "Déconnexion",
    "email": "Adresse email",
    "password": "Mot de passe",
    "forgotPassword": "Mot de passe oublié ?"
  },
  "errors": {
    "required": "Ce champ est requis",
    "invalidEmail": "Email invalide",
    "minLength": "Minimum {{min}} caractères"
  },
  "greeting": "Bienvenue, {{name}} !"
}`}
          language="json"
        />
      </Section>

      <Section id="use-waka-hook" title="Hook useWaka">
        <p className="text-muted-foreground mb-4">
          Le hook <code>useWaka</code> fournit un accès complet aux fonctions de traduction et de langue :
        </p>
        <CodeBlock
          code={`import { useWaka } from "@wakastellar/ui"

function MyComponent() {
  const {
    // Langue
    currentLanguage,   // Code de la langue actuelle ("fr", "en", etc.)
    changeLanguage,    // Changer de langue (async)
    languages,         // Liste des langues disponibles
    isLanguageLoading, // État de chargement

    // Traductions
    t,                 // Fonction de traduction i18next

    // Thème (bonus)
    currentTheme,
    changeTheme,
  } = useWaka()

  return (
    <div>
      <p>Langue actuelle : {currentLanguage}</p>
      <p>{t("common.search")}</p>
      <button onClick={() => changeLanguage("en")}>
        Switch to English
      </button>
    </div>
  )
}`}
          language="tsx"
        />
      </Section>

      <Section id="use-language-hook" title="Hook useLanguage">
        <p className="text-muted-foreground mb-4">
          Pour accéder uniquement aux fonctionnalités de langue :
        </p>
        <CodeBlock
          code={`import { useLanguage } from "@wakastellar/ui"

function LanguageSwitcher() {
  const {
    currentLanguage,  // Code de la langue
    changeLanguage,   // Changer de langue
    languages,        // Liste des langues
    isLoading,        // État de chargement
  } = useLanguage()

  return (
    <select
      value={currentLanguage}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.flagEmoji} {lang.label}
        </option>
      ))}
    </select>
  )
}`}
          language="tsx"
        />
      </Section>

      <Section id="translation-function" title="Fonction de traduction">
        <p className="text-muted-foreground mb-4">
          La fonction <code>t()</code> supporte l'interpolation et les namespaces :
        </p>
        <CodeBlock
          code={`import { useWaka } from "@wakastellar/ui"

function Examples() {
  const { t } = useWaka()

  return (
    <>
      {/* Traduction simple */}
      <p>{t("common.save")}</p>
      {/* "Enregistrer" */}

      {/* Avec interpolation */}
      <p>{t("greeting", { name: "Jean" })}</p>
      {/* "Bienvenue, Jean !" */}

      {/* Avec valeur par défaut */}
      <p>{t("missing.key", "Valeur par défaut")}</p>

      {/* Accès imbriqué */}
      <p>{t("errors.minLength", { min: 8 })}</p>
      {/* "Minimum 8 caractères" */}
    </>
  )
}`}
          language="tsx"
        />
      </Section>

      <Section id="use-translation-hook" title="Hook useTranslation">
        <p className="text-muted-foreground mb-4">
          Pour un accès direct à i18next (pour les cas avancés) :
        </p>
        <CodeBlock
          code={`import { useTranslation } from "react-i18next"

function AdvancedComponent() {
  const { t, i18n } = useTranslation()

  // Changer de langue directement via i18n
  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  // Vérifier si une clé existe
  const hasKey = i18n.exists("my.key")

  return <p>{t("common.save")}</p>
}`}
          language="tsx"
        />
      </Section>

      <Section id="persist-language" title="Persistance">
        <p className="text-muted-foreground mb-4">
          La langue sélectionnée est automatiquement sauvegardée dans le localStorage
          et restaurée au rechargement de la page :
        </p>
        <CodeBlock
          code={`<WakaProvider
  config={{
    language: {
      defaultLanguage: "fr",
      supportedLanguages: ["fr", "en"],
      // Clé personnalisée pour le localStorage (optionnel)
      storageKey: "my-app-language", // Par défaut: "waka-ui-language"
      languages: [...],
    },
  }}
>
  {children}
</WakaProvider>`}
          language="tsx"
        />
      </Section>

      <Section id="i18n-editor" title="Éditeur de traductions">
        <p className="text-muted-foreground mb-4">
          Pour gérer vos traductions visuellement, utilisez le bloc <code>WakaI18nEditor</code> :
        </p>
        <CodeBlock
          code={`import { WakaI18nEditor } from "@wakastellar/ui"

<WakaI18nEditor
  config={{
    languages: [
      { code: "fr", label: "Français", flag: "🇫🇷", isSource: true },
      { code: "en", label: "English", flag: "🇬🇧" },
      { code: "es", label: "Español", flag: "🇪🇸" },
    ],
    sourceLanguage: "fr",
    keyPathSeparator: ".",
    autoSave: true,
    saveDebounceMs: 500,
  }}
  translations={[
    {
      key: "common.save",
      translations: {
        fr: { value: "Enregistrer" },
        en: { value: "Save" },
        es: { value: "Guardar" },
      },
    },
    // ...
  ]}
  onChange={(key, lang, value) => console.log(key, lang, value)}
  onSave={async (translations) => saveTranslations(translations)}
  onAddKey={async (key) => addKey(key)}
  onDeleteKey={async (key) => deleteKey(key)}
  onAddLanguage={async (lang) => addLanguage(lang)}
  onExport={async (language) => exportTranslations(language)}
  onImport={async (file, lang, strategy) => importTranslations(file, lang, strategy)}
/>`}
          language="tsx"
        />
        <p className="text-muted-foreground mt-4">
          Fonctionnalités de l'éditeur :
        </p>
        <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
          <li>Vue tableau avec clés et traductions par langue</li>
          <li>Édition inline de toutes les langues (y compris la langue source)</li>
          <li>Recherche et filtres par état (manquant, identique, valide)</li>
          <li>Groupement automatique par préfixe de clé</li>
          <li>Auto-save avec debounce configurable</li>
          <li>Import/Export JSON</li>
          <li>Ajout dynamique de clés et de langues</li>
          <li>Validation des placeholders</li>
        </ul>
      </Section>

      <Section id="best-practices" title="Bonnes pratiques">
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>
            <strong>Organisez par namespace :</strong> Utilisez des préfixes comme <code>common.</code>, <code>auth.</code>, <code>errors.</code>
          </li>
          <li>
            <strong>Utilisez l'interpolation :</strong> Préférez <code>{"Hello, {{name}}!"}</code> plutôt que la concaténation
          </li>
          <li>
            <strong>Traductions inline pour les petits projets :</strong> Plus simple à maintenir
          </li>
          <li>
            <strong>S3 pour les gros projets :</strong> Permet le chargement à la demande et la mise à jour sans redéploiement
          </li>
          <li>
            <strong>Testez toutes les langues :</strong> Certains textes peuvent être plus longs dans d'autres langues
          </li>
        </ul>
      </Section>
    </article>
  )
}
