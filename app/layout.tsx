import type { Metadata } from 'next'
import React from 'react'
import Header from '@/components/Layout/Header'

export const metadata: Metadata = {
  title:
    'Leading Utilities Company in DRC - Construction, Solar, Electric Solutions',
  description:
    'We are a premier utilities company in DRC offering construction services, traffic light systems, public lighting, solar installations, and electric cable fabrication. Contact us for innovative and sustainable solutions.',
  keywords: [
    'utilities company DRC',
    'construction services DRC',
    'traffic lights DRC',
    'public lighting DRC',
    'solar installation DRC',
    'electric cable fabrication DRC',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      'Leading Utilities Company in DRC - Construction, Solar, Electric Solutions',
    description:
      'Transforming communities with expert services in construction, traffic lights, public lighting, solar installations, and electric cable fabrication in the Democratic Republic of Congo.',
    url: 'https://www.generalenergy.cd',
    type: 'website',
    images: [
      {
        url: 'https://www.example.com/images/company-banner.jpg',
        alt: 'Company Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leading Utilities Company in DRC',
    description:
      'Expert services in construction, traffic lights, public lighting, solar installations, and electric cable fabrication in DRC.',
    images: ['https://www.example.com/images/company-banner.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Utilities',
    name: 'Your Company Name',
    description:
      'We provide professional services in construction, traffic lights, public lighting, solar installations, and electric cable fabrication in the Democratic Republic of Congo.',
    image: 'https://www.example.com/images/company-banner.jpg',
    telephone: '+243123456789',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Avenue Example',
      addressLocality: 'Kinshasa',
      addressRegion: 'Kinshasa',
      postalCode: '00000',
      addressCountry: 'CD',
    },
    url: 'https://www.example.com',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -4.441931,
      longitude: 15.266293,
    },
    openingHours: 'Mo-Fr 08:00-18:00',
    sameAs: [
      'https://www.facebook.com/YourCompanyName',
      'https://www.linkedin.com/company/YourCompanyName',
    ],
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="author" href="humans.txt" />
        <link
          rel="icon"
          href="https://www.example.com/favicon.ico"
          type="image/x-icon"
        />
        {/* Schema.org JSON-LD for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="p-0 flex flex-col items-center">
        <Header />
        {children}
      </body>
    </html>
  )
}
