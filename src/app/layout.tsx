import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NavBar from "./navbar"

const inter = Inter({ subsets: ["latin"] })

import { twMerge } from "tailwind-merge"

export const metadata: Metadata = {
  title: "XYTweet",
  icons: null
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "relative bg-white text-black"
        )}
      >
        <header className="fixed left-0 right-0 bottom-0 sm:top-0 h-20 bg-white/80 backdrop-blur-xl z-10">
          <NavBar className="max-w-lg m-auto" />
        </header>
        <main className="mb-24 sm:mt-24 p-6 lg:p-0 m-auto max-w-lg z-0">{children}</main>
      </body>
    </html>
  )
}
