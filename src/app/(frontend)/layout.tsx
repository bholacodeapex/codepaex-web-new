import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

import './globals.css'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { Header } from '@/Header/Component'
import Footer from '@/components/HomePage/footer/Footer'
import { Providers } from '@/providers'
import { AdminBar } from '@/components/AdminBar'
import { draftMode } from 'next/headers'
import { LivePreviewListener } from '@/components/LivePreviewListener'

const Layout = ({ children }: LayoutProps) => {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          {/* <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          /> */}

          <LivePreviewListener />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default Layout