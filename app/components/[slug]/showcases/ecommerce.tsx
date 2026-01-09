"use client"

import * as React from "react"
import {
  WakaPricingTable,
  WakaCartSummary,
  WakaProductCard,
  WakaCheckoutStepper,
  WakaCouponInput,
  WakaPaymentMethodPicker,
  WakaOrderTracker,
  WakaInvoicePreview,
} from "@wakastellar/ui"
import type { ComponentShowcaseConfig } from "./types"

// ============================================
// PRICING TABLE SHOWCASE
// ============================================

export const pricingTableShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Table de tarification",
      description: "Affiche les plans tarifaires avec comparaison des fonctionnalites",
      preview: (
        <WakaPricingTable
          tiers={[
            {
              id: "starter",
              name: "Starter",
              description: "Pour les petites equipes",
              monthlyPrice: 900,
              annualPrice: 9000,
              currency: "\u20AC",
              features: [
                { name: "5 projets", included: true },
                { name: "10 Go stockage", included: true },
                { name: "Support email", included: true },
                { name: "API access", included: false },
              ],
              ctaText: "Choisir Starter",
            },
            {
              id: "pro",
              name: "Pro",
              description: "Pour les equipes en croissance",
              monthlyPrice: 2900,
              annualPrice: 29000,
              currency: "\u20AC",
              features: [
                { name: "Projets illimites", included: true },
                { name: "100 Go stockage", included: true },
                { name: "Support prioritaire", included: true },
                { name: "API access", included: true },
              ],
              highlighted: true,
              highlightLabel: "Populaire",
              ctaText: "Choisir Pro",
            },
            {
              id: "enterprise",
              name: "Enterprise",
              description: "Pour les grandes organisations",
              monthlyPrice: 9900,
              annualPrice: 99000,
              currency: "\u20AC",
              features: [
                { name: "Tout illimite", included: true },
                { name: "Support dedie", included: true },
                { name: "SLA garanti", included: true },
                { name: "SSO", included: true },
              ],
              ctaText: "Contacter",
            },
          ]}
          onCtaClick={(tier) => console.log("Selected:", tier)}
        />
      ),
      code: `<WakaPricingTable
  tiers={[
    {
      id: "starter",
      name: "Starter",
      description: "Pour les petites equipes",
      monthlyPrice: 900,
      annualPrice: 9000,
      currency: "\u20AC",
      features: [
        { name: "5 projets", included: true },
        { name: "10 Go stockage", included: true },
      ],
      ctaText: "Choisir Starter",
    },
    {
      id: "pro",
      name: "Pro",
      description: "Pour les equipes en croissance",
      monthlyPrice: 2900,
      annualPrice: 29000,
      features: [
        { name: "Projets illimites", included: true },
        { name: "Support prioritaire", included: true },
      ],
      highlighted: true,
      highlightLabel: "Populaire",
    },
  ]}
  onCtaClick={(tier) => console.log("Selected:", tier)}
/>`,
    },
  ],
}

// ============================================
// CART SUMMARY SHOWCASE
// ============================================

export const cartSummaryShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Resume du panier",
      description: "Affiche le resume des articles dans le panier",
      preview: (
        <WakaCartSummary
          items={[
            { id: "1", name: "T-shirt Premium", price: 29.99, quantity: 2, image: "/placeholder.svg" },
            { id: "2", name: "Jean Slim", price: 79.99, quantity: 1, image: "/placeholder.svg" },
          ]}
          currency="EUR"
          taxRate={0.20}
          shippingCost={5.99}
          onQuantityChange={(id, qty) => console.log(id, qty)}
          onRemoveItem={(id) => console.log("Remove:", id)}
        />
      ),
      code: `<WakaCartSummary
  items={[
    { id: "1", name: "T-shirt Premium", price: 29.99, quantity: 2, image: "/placeholder.svg" },
    { id: "2", name: "Jean Slim", price: 79.99, quantity: 1, image: "/placeholder.svg" },
  ]}
  currency="EUR"
  taxRate={0.20}
  shippingCost={5.99}
  onQuantityChange={(id, qty) => console.log(id, qty)}
  onRemoveItem={(id) => console.log("Remove:", id)}
/>`,
    },
  ],
}

// ============================================
// PRODUCT CARD SHOWCASE
// ============================================

export const productCardShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Carte produit",
      description: "Affiche un produit avec image, prix et actions",
      preview: (
        <div className="grid gap-4 md:grid-cols-2 max-w-lg">
          <WakaProductCard
            name="Sneakers Premium"
            price={149.99}
            originalPrice={199.99}
            images={[
              { src: "/placeholder.svg", alt: "Sneakers Premium" },
              { src: "/placeholder.svg", alt: "Sneakers Premium Side" },
            ]}
            rating={4.5}
            reviewCount={128}
            discountBadge="-25%"
            onAddToCart={() => console.log("Add to cart")}
            onWishlistToggle={(wishlisted) => console.log("Wishlist:", wishlisted)}
          />
        </div>
      ),
      code: `<WakaProductCard
  name="Sneakers Premium"
  price={149.99}
  originalPrice={199.99}
  images={[
    { src: "/placeholder.svg", alt: "Sneakers Premium" },
    { src: "/placeholder.svg", alt: "Sneakers Premium Side" },
  ]}
  rating={4.5}
  reviewCount={128}
  discountBadge="-25%"
  onAddToCart={() => console.log("Add to cart")}
  onWishlistToggle={(wishlisted) => console.log("Wishlist:", wishlisted)}
/>`,
    },
  ],
}

// ============================================
// CHECKOUT STEPPER SHOWCASE
// ============================================

export const checkoutStepperShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Etapes de checkout",
      description: "Affiche les etapes du processus de commande",
      preview: (
        <WakaCheckoutStepper
          currentStep={1}
          steps={[
            { id: "cart", title: "Panier", description: "Verifiez votre panier" },
            { id: "shipping", title: "Livraison", description: "Adresse de livraison" },
            { id: "payment", title: "Paiement", description: "Mode de paiement" },
            { id: "confirmation", title: "Confirmation", description: "Confirmez votre commande" },
          ]}
          onStepChange={(index, stepId) => console.log("Step:", index, stepId)}
        />
      ),
      code: `<WakaCheckoutStepper
  currentStep={1}
  steps={[
    { id: "cart", title: "Panier", description: "Verifiez votre panier" },
    { id: "shipping", title: "Livraison", description: "Adresse de livraison" },
    { id: "payment", title: "Paiement", description: "Mode de paiement" },
    { id: "confirmation", title: "Confirmation", description: "Confirmez votre commande" },
  ]}
  onStepChange={(index, stepId) => console.log("Step:", index, stepId)}
/>`,
    },
  ],
}

// ============================================
// COUPON INPUT SHOWCASE
// ============================================

export const couponInputShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Champ code promo",
      description: "Permet de saisir et valider un code promotionnel",
      preview: (
        <WakaCouponInput
          onApply={(coupon) => console.log("Applied:", coupon)}
          onRemove={(code) => console.log("Removed:", code)}
          validateCoupon={async (code) => ({
            isValid: code === "PROMO20",
            coupon: code === "PROMO20" ? { code: "PROMO20", discountValue: 20, discountType: "percentage" as const } : undefined,
            errorMessage: code !== "PROMO20" ? "Code invalide" : undefined,
          })}
          placeholder="Entrez votre code promo"
          applyButtonText="Appliquer"
        />
      ),
      code: `<WakaCouponInput
  onApply={(coupon) => console.log("Applied:", coupon)}
  onRemove={(code) => console.log("Removed:", code)}
  validateCoupon={async (code) => ({
    isValid: code === "PROMO20",
    coupon: code === "PROMO20" ? { code: "PROMO20", discountValue: 20, discountType: "percentage" } : undefined,
    errorMessage: code !== "PROMO20" ? "Code invalide" : undefined,
  })}
  placeholder="Entrez votre code promo"
  applyButtonText="Appliquer"
/>`,
    },
  ],
}

// ============================================
// PAYMENT METHOD PICKER SHOWCASE
// ============================================

export const paymentMethodPickerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Selection de paiement",
      description: "Permet de choisir un mode de paiement",
      preview: (
        <WakaPaymentMethodPicker
          value="credit_card"
          onChange={(value, method) => console.log("Selected:", value, method)}
          options={[
            { type: "credit_card", label: "Carte bancaire", description: "Visa, Mastercard, Amex", acceptedBrands: ["visa", "mastercard", "amex"] },
            { type: "paypal", label: "PayPal", description: "Paiement securise" },
            { type: "apple_pay", label: "Apple Pay", description: "Paiement rapide" },
          ]}
        />
      ),
      code: `<WakaPaymentMethodPicker
  value="credit_card"
  onChange={(value, method) => console.log("Selected:", value, method)}
  options={[
    { type: "credit_card", label: "Carte bancaire", description: "Visa, Mastercard, Amex", acceptedBrands: ["visa", "mastercard", "amex"] },
    { type: "paypal", label: "PayPal", description: "Paiement securise" },
    { type: "apple_pay", label: "Apple Pay", description: "Paiement rapide" },
  ]}
/>`,
    },
  ],
}

// ============================================
// ORDER TRACKER SHOWCASE
// ============================================

export const orderTrackerShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Suivi de commande",
      description: "Affiche la progression d une commande",
      preview: (
        <WakaOrderTracker
          order={{
            orderId: "ORD-2024-001",
            status: "shipped",
            orderDate: new Date("2024-01-15T10:30:00"),
            estimatedDelivery: new Date("2024-01-17"),
            deliveryAddress: {
              name: "Jean Dupont",
              street1: "123 Rue de la Paix",
              city: "Paris",
              state: "Ile-de-France",
              postalCode: "75001",
              country: "France",
            },
            carrier: { name: "Colissimo", serviceType: "Express" },
            trackingNumber: "1Z999AA10123456784",
            updates: [
              { id: "1", status: "ordered", message: "Commande confirmee", timestamp: new Date("2024-01-15T10:30:00") },
              { id: "2", status: "processing", message: "En preparation", timestamp: new Date("2024-01-15T14:00:00") },
              { id: "3", status: "shipped", message: "Expedie", timestamp: new Date("2024-01-16T09:00:00"), location: "Paris" },
            ],
          }}
        />
      ),
      code: `<WakaOrderTracker
  order={{
    orderId: "ORD-2024-001",
    status: "shipped",
    orderDate: new Date("2024-01-15T10:30:00"),
    estimatedDelivery: new Date("2024-01-17"),
    deliveryAddress: {
      name: "Jean Dupont",
      street1: "123 Rue de la Paix",
      city: "Paris",
      state: "Ile-de-France",
      postalCode: "75001",
      country: "France",
    },
    carrier: { name: "Colissimo", serviceType: "Express" },
    trackingNumber: "1Z999AA10123456784",
    updates: [
      { id: "1", status: "ordered", message: "Commande confirmee", timestamp: new Date() },
      { id: "2", status: "processing", message: "En preparation", timestamp: new Date() },
      { id: "3", status: "shipped", message: "Expedie", timestamp: new Date(), location: "Paris" },
    ],
  }}
/>`,
    },
  ],
}

// ============================================
// INVOICE PREVIEW SHOWCASE
// ============================================

export const invoicePreviewShowcase: ComponentShowcaseConfig = {
  examples: [
    {
      title: "Apercu facture",
      description: "Affiche un apercu de facture telechargeable",
      preview: (
        <WakaInvoicePreview
          invoice={{
            invoiceNumber: "INV-2024-001",
            invoiceDate: new Date("2024-01-15"),
            dueDate: new Date("2024-02-15"),
            status: "pending",
            currency: "EUR",
            company: {
              name: "Ma Societe",
              address: { name: "Ma Societe", street1: "123 Rue Commerce", city: "Paris", postalCode: "75001", country: "France" },
              email: "contact@masociete.fr",
              taxId: "FR12345678",
            },
            billTo: { name: "Client SARL", street1: "456 Avenue Client", city: "Lyon", postalCode: "69001", country: "France" },
            items: [
              { id: "1", description: "Service Premium", quantity: 1, unitPrice: 499 },
              { id: "2", description: "Support annuel", quantity: 12, unitPrice: 49 },
            ],
            taxRate: 0.20,
          }}
          onDownload={() => console.log("Download PDF")}
        />
      ),
      code: `<WakaInvoicePreview
  invoice={{
    invoiceNumber: "INV-2024-001",
    invoiceDate: new Date("2024-01-15"),
    dueDate: new Date("2024-02-15"),
    status: "pending",
    currency: "EUR",
    company: {
      name: "Ma Societe",
      address: { name: "Ma Societe", street1: "123 Rue Commerce", city: "Paris", postalCode: "75001", country: "France" },
      email: "contact@masociete.fr",
      taxId: "FR12345678",
    },
    billTo: { name: "Client SARL", street1: "456 Avenue Client", city: "Lyon", postalCode: "69001", country: "France" },
    items: [
      { id: "1", description: "Service Premium", quantity: 1, unitPrice: 499 },
      { id: "2", description: "Support annuel", quantity: 12, unitPrice: 49 },
    ],
    taxRate: 0.20,
  }}
  onDownload={() => console.log("Download PDF")}
/>`,
    },
  ],
}

// ============================================
// EXPORT ALL E-COMMERCE SHOWCASES
// ============================================

export const ecommerceShowcases = {
  "pricing-table": pricingTableShowcase,
  "cart-summary": cartSummaryShowcase,
  "product-card": productCardShowcase,
  "checkout-stepper": checkoutStepperShowcase,
  "coupon-input": couponInputShowcase,
  "payment-method-picker": paymentMethodPickerShowcase,
  "order-tracker": orderTrackerShowcase,
  "invoice-preview": invoicePreviewShowcase,
}
