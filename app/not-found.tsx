"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@wakastellar/ui"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      {/* Image 404 */}
      <div className="relative w-full max-w-2xl mb-8">
        <Image
          src="/404.png"
          alt="Page 404 - Vaisseau spatial crashé avec des astronautes perdus"
          width={800}
          height={400}
          className="w-full h-auto rounded-xl shadow-2xl border-4 border-primary/20"
          priority
        />
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="text-center max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Houston, on a un problème !
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Il semblerait que cette page se soit perdue dans l&apos;espace...
          <br />
          <span className="text-sm">Nos astronautes cherchent le chemin, mais ils ont besoin d&apos;aide !</span>
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Home className="h-4 w-4" />
              Retour à l&apos;accueil
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            Page précédente
          </Button>
        </div>

        {/* Search suggestion */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">
            Vous cherchez quelque chose en particulier ?
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/components">
              <Button variant="ghost" size="sm" className="gap-1">
                <Search className="h-3 w-3" />
                Composants
              </Button>
            </Link>
            <Link href="/blocks">
              <Button variant="ghost" size="sm">
                Blocks
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="ghost" size="sm">
                Documentation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Fun footer */}
      <p className="mt-12 text-xs text-muted-foreground/60 italic">
        Erreur 404 • Les extraterrestres n&apos;ont pas mangé cette page... elle n&apos;existe tout simplement pas.
      </p>
    </div>
  )
}
