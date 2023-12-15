"use client"
//components
import Image from "next/image"
import Link from "next/link"
//libs
import { usePathname } from 'next/navigation'
import { useTranslation } from '../../app/i18n/client'
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//images
import { baseImageUrl } from "@/services/API"
const logo = `${baseImageUrl}/logos/logo.svg`
import classNames from "classnames"




const Footer = ({ lng }: { lng: string }) => {
  const pathname = usePathname()
  const { t } = useTranslation(lng)


  const getClassName = (path: string) => {
    if (path === "/") {
      return pathname === "/en" || pathname === "/de" || pathname === "/" ? styles.activeLink : ''
    } else if (pathname.includes(path)) {
      return styles.activeLink
    } else return ''
  }

  const SECOND_COLUMN_ITEMS =
    [{
      name: t("homePageBottomBar2"),
      link: "/"
    },
    {
      name: t("homePageBottomBar3"),
      link: "/philosophy"
    },
    {
      name: t("homePageBottomBar4"),
      link: "/portfolio"
    }]


  const THIRD_COLUMN_ITEMS = [{
    name: t("homePageBottomBar5"),
    link: "/contact"
  },
  {
    name: t("homePageBottomBar6"),
    link: "/legalNotice"
  },
  {
    name: t("homePageBottomBar7"),
    link: "/privacyPolicy"
  }]
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={classNames(styles.column, styles.FirstColumn)}>
          <Link className={styles.logoLink} href={`/${lng}`}>
            <Image priority={false} width={254} height={38} src={logo} alt="logo" />
          </Link>
          <div className={global.Body5Medium} >
            {t("homePageBottomBar1")}
          </div>
        </div>
        <div className={classNames(styles.column, global.Body3Medium)}>
          {
            SECOND_COLUMN_ITEMS.map(({ name, link }, i) => (
              <Link href={link} key={i} className={classNames(
                styles.colItem, getClassName(link))}>
                {name}
              </Link>
            ))
          }
        </div>
        <div className={styles.column}>
          {
            THIRD_COLUMN_ITEMS.map(({ name, link }, i) => (
              <Link href={link} key={i} className={classNames(
                styles.colItem, getClassName(link))}>
                {name}
              </Link>
            ))
          }
        </div>
        <div className={styles.mobileMenu}>
          {
            SECOND_COLUMN_ITEMS.concat(THIRD_COLUMN_ITEMS).map(({ name, link }, i) => (
              <Link href={link} key={i} className={styles.colItem}>
                {name}
              </Link>
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer