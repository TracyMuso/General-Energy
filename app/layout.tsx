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
      <body className="p-0 flex flex-col items-center">{children}</body>
    </html>
  )
}
