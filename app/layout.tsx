import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'General Energy | Utilities services in Congo',
  description: 'The number 1 Solar Energy provider in DRC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Utilities",
    "name": "Your Company Name",
    "description": "We provide professional services in construction, traffic lights, public lighting, solar installations, and electric cable fabrication in the Democratic Republic of Congo.",
    "image": "https://www.example.com/images/company-banner.jpg",
    "telephone": "+243123456789",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Avenue Example",
        "addressLocality": "Kinshasa",
        "addressRegion": "Kinshasa",
        "postalCode": "00000",
        "addressCountry": "CD"
    },
    "url": "https://www.example.com",
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": -4.441931,
        "longitude": 15.266293
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [
        "https://www.facebook.com/YourCompanyName",
        "https://www.linkedin.com/company/YourCompanyName"
    ]
}

  return (
    <html lang="en">
      <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="author" href="humans.txt" />
          <meta name="robots" content="index, follow" />
          <title>Leading Utilities Company in DRC - Construction, Solar, Electric Solutions</title>
          <meta name="description" content="We are a premier utilities company in DRC offering construction services, traffic light systems, public lighting, solar installations, and electric cable fabrication. Contact us for innovative and sustainable solutions." />
          <meta name="keywords" content="utilities company DRC, construction services DRC, traffic lights DRC, public lighting DRC, solar installation DRC, electric cable fabrication DRC" />
          <meta property="og:title" content="Leading Utilities Company in DRC - Construction, Solar, Electric Solutions" />
          <meta property="og:description" content="Transforming communities with expert services in construction, traffic lights, public lighting, solar installations, and electric cable fabrication in the Democratic Republic of Congo." />
          <meta property="og:image" content="https://www.example.com/images/company-banner.jpg" />
          <meta property="og:url" content="https://www.generalenergy.cd" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Leading Utilities Company in DRC" />
          <meta name="twitter:description" content="Expert services in construction, traffic lights, public lighting, solar installations, and electric cable fabrication in DRC." />
          <meta name="twitter:image" content="https://www.example.com/images/company-banner.jpg" />

          <link rel="icon" href="https://www.example.com/favicon.ico" type="image/x-icon" />
           {/* Schema.org JSON-LD for Local Business */}
           <script
             type="application/ld+json"
             dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
      </head>
      <body className="p-0 flex flex-col items-center">{children}</body>
    </html>
  )
}
