import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'General Energy',
  description: 'The number 1 Solar Energy provider in DRC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="author" href="humans.txt" />
      </head>
      <body className="p-0 flex flex-col items-center">{children}</body>
    </html>
  )
}
