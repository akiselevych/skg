//components
import { ReactNode } from "react"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import { Metadata } from "next"
//styles
import "@/styles/global.scss"
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import Banner from "@/components/Banner/Banner";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
  title: 'SKG'
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: ReactNode,
  params: {
    lng: string
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <link rel="icon" href="https://icapgroupgmbh.com/images/FAV_icon.svg" />
      <body>
        <Header lng={lng} />
        <main>
          {children}
          <Banner lng={lng} />
        </main>
        <Footer lng={lng} />
      </body>
    </html>
  )
}
