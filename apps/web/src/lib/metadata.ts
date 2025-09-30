export const siteConfig = {
  name: "Handlebars",
  url: "https://www.handlebars.co",
  description: "Boutique offline marketing agency specializing in radio, podcast, TV, OOH, and influencer campaigns",
  keywords: [
    "offline marketing",
    "marketing agency",
    "radio advertising",
    "podcast advertising",
    "TV advertising",
    "OOH advertising",
    "out-of-home advertising",
    "influencer marketing",
    "startup marketing",
    "growth marketing",
    "attribution",
    "marketing analytics"
  ],
  authors: [
    {
      name: "Handlebars",
      url: "https://www.handlebars.co",
    },
  ],
  creator: "Handlebars",
  publisher: "Handlebars",
  social: {
    twitter: "@handlebarsco",
  },
}

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "@id": "https://www.handlebars.co/#organization",
  name: "Handlebars",
  url: "https://www.handlebars.co",
  logo: {
    "@type": "ImageObject",
    url: "https://www.handlebars.co/logo.png",
    width: "512",
    height: "512"
  },
  description: siteConfig.description,
  sameAs: [
    "https://twitter.com/handlebarsco"
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "US"
  },
  serviceArea: {
    "@type": "Country",
    name: "United States"
  },
  knowsAbout: [
    "Radio Advertising",
    "Podcast Advertising",
    "TV Advertising",
    "Out-of-Home Advertising",
    "Influencer Marketing",
    "Marketing Attribution",
    "Growth Marketing"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Radio Advertising",
          description: "Strategic radio campaign planning and attribution"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Podcast Advertising",
          description: "Targeted podcast sponsorship and host-read ads"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "TV Advertising",
          description: "Television campaign planning and execution"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Out-of-Home Advertising",
          description: "Billboard and outdoor advertising campaigns"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Influencer Marketing",
          description: "Strategic influencer partnerships and campaigns"
        }
      }
    ]
  }
}