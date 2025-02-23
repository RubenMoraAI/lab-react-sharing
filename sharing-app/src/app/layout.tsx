'use client'
import Navbar from './components/layout/Navbar'
import { ShareOptionProvider } from '../context/ShareOption.context'
import '@/../styles/main.css'
import SharingSelector from './components/layout/SharingSelector'
import Head from 'next/head'
export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <Head>
        <title>React.js Sharing Data Lab - Testing and Solutions</title>
        <meta
          name="description"
          content="Explore a React.js and Next.js lab demonstrating common data sharing problems and their solutions. Perfect for frontend developers working with TypeScript, HTML, CSS, and JavaScript."
        />
        <meta name="keywords" content="React.js, Next.js, Frontend developer, Typescript, HTML, CSS, JavaScript, Data sharing, React components" />
        <meta name="author" content="Ruben Mora Vargas" />
        <link rel="canonical" href={`https://${process.env.NEXT_PUBLIC_APP_URL}`} />
        <meta property="og:title" content="React.js Sharing Data Lab - Testing and Solutions" />
        <meta property="og:description" content="Explore a React.js and Next.js lab demonstrating common data sharing problems and their solutions." />
        <meta property="og:image" content={`https://${process.env.NEXT_PUBLIC_APP_URL}/images/og-image.jpg`} />
        <meta property="og:url" content={`https://${process.env.NEXT_PUBLIC_APP_URL}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="React.js Sharing Data Lab - Testing and Solutions" />
        <meta name="twitter:description" content="Explore a React.js and Next.js lab demonstrating common data sharing problems and their solutions." />
        <meta name="twitter:image" content={`https://${process.env.NEXT_PUBLIC_APP_URL}/images/x-image.jpg`} />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
