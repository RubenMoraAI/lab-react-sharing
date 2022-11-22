'use client'
import Navbar from './components/layout/Navbar'
import { ShareOptionProvider } from '../context/ShareOption.context'
import './../../styles/main.css'
import SharingSelector from './components/layout/SharingSelector'
export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <title>React.js sharing data lab testing</title>
        <meta name="description" content="React Typescript with Next.js lab to show sharing data problems and solutions" />
        <meta name="keywords" content="React.js, Next.js, Frontend developer, Typescript, HTML, CSS, JavaScript" />
        <meta name="author" content="Ruben Mora Vargas" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="dark">
        <div className="p-6 bg-slate-800 min-h-screen text-white">
          <Navbar />
          <div className="pt-16 max-w-2xl mx-auto">
            <header className="text-center">
              <h1 className="text-center font-bold text-2xl mb-4 md:text-4xl md:mt-6">React.js sharing data lab testing</h1>
              <p className="mb-8 leading-tight">Custom sample for learning about sharing data components in react </p>
            </header>
            <ShareOptionProvider>
              <SharingSelector />
              {children}
            </ShareOptionProvider>
          </div>
        </div>
      </body>
    </html>
  )
}
export default RootLayout
