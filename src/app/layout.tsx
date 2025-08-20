import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'VIA Knowledge Hub ',
    description: 'VIA Knowledge Hub',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    )
}
