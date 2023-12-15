"use client"
//components
import Image from "next/image"
import Link from "next/link"
import DesctopMenu from "../DesctopMenu/DesctopMenu"
import MobileMenu from "../MobileMenu/MobileMenu"
import Hamburger from 'hamburger-react'
//libs
import { useEffect, useState } from "react"
import classNames from "classnames"
import { usePathname } from "next/navigation"
import { useTranslation } from '../../app/i18n/client'
import { languages } from '../../app/i18n/settings'
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//images
import { baseImageUrl } from "@/services/API"
const logo = `${baseImageUrl}/logos/logo.svg`
const arrow = `${baseImageUrl}/icons2/dropdownArr.svg`




function Header({ lng }: { lng: string }) {
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useTranslation(lng)
  const pathname = usePathname()

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    document.body.style.overflowY = 'unset'
    setIsMobileMenuOpen(false)
  }, [pathname])


  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link className={styles.logoLink} href={`/${lng}`}>
          <Image priority width={254} height={38} src={logo} alt="logo" />
        </Link>
        <div className={styles.DesctopMenuContainer}>
          <DesctopMenu t={t} lng={lng} />
        </div>
        <div className={styles.mopbileMenuToggler}>
          <Hamburger size={24} toggled={isMobileMenuOpen} toggle={() => setIsMobileMenuOpen(prev => !prev)} />
        </div>
        <div className={classNames(global.Body3Medium, styles.langPicker)}>
          <div
            onClick={() => setIsLangOpen(prev => !prev)}
            className={classNames(styles.currLocale, styles.localeItem)}>
            {lng.toUpperCase()}
            <Image width={24} height={24} style={{ transform: isLangOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} src={arrow}
              alt="pick language" />
          </div>
          {isLangOpen && <div className={styles.dropdown}>
            {languages.filter((l) => lng !== l).map((loc, i) =>
              <Link
                href={`/${loc}/${pathname.slice(4)}`}
                key={i}
                className={classNames(styles.localeItem)}
              >{loc.toUpperCase()}
              </Link>)}
          </div>}
        </div>
      </div>
      {isMobileMenuOpen && <MobileMenu t={t} lng={lng} />}
    </header>
  )
}

export default Header