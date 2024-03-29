import Link from "next/link"

import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <body className={`font-sans ${inter.variable}`}>
    <div className="min-h-screen bg-gray-50">
      <header className="flex py-2 px-8 items-center justify-end gap-4">
        <Link className="text-xl font-bold hover:underline underline-offset-8"href="/blog">BLOG</Link>
        <Link className="text-xl font-bold hover:underline underline-offset-8"href="/">HOME</Link>
      </header>
      <main className="flex flex-col p-8 items-center justify-normal gap-4">{children}</main>
      <footer></footer>
    </div>
    </body>
  }

