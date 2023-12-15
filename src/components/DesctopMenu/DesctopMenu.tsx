"use client"
//components
import Link from "next/link"
//libs
import { usePathname } from 'next/navigation'
import classNames from "classnames"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"



const DesctopMenu = ({ lng, t }: { lng: string, t: (arg: string) => string }) => {
  const pathname = usePathname()

  const NAV_ITEMS = [
    {
      name: t('openedMenuButton1'),
      path: "/",
    },
    {
      name: t('openedMenuButton2'),
      path: "/philosophy",
    },
    {
      name: t('openedMenuButton3'),
      path: "/portfolio",
    },
    {
      name: t('openedMenuButton4'),
      path: "/contact",
    }
  ]




  const getClassName = (path: string) => {
    if (path === "/") {
      return pathname === "/en" || pathname === "/de" || pathname === "/" ? styles.activeLink : ''
    } else if (pathname.includes(path)) {
      return styles.activeLink
    } else return ''
  }

  return (
    <nav className={styles.content}>
      {
        NAV_ITEMS.map(({ path, name }, i) => (
          <Link className={classNames(global.Body3Medium, getClassName(path))} key={i} href={`/${lng}${path}`}>{name}</Link>
        ))
      }
    </nav>
  )
}

export default DesctopMenu