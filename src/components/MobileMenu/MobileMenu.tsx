'use client';
//components
import Link from "next/link"
//libs
import { usePathname } from 'next/navigation'
import classNames from "classnames"
import { languages } from '../../app/i18n/settings'

//styles
import styles from "./styles.module.scss"






const MobileMenu = ({ lng, t }: { lng: string, t: (arg: string) => string }) => {

  const pathname = usePathname()

  const NAV_ITEMS = [
    {
      name: t("openedMenuButton1"),
      path: "/",
    },
    {
      name: t("openedMenuButton2"),
      path: "/philosophy",
    },
    {
      name: t("openedMenuButton3"),
      path: "/portfolio",
    },
    {
      name: t("openedMenuButton4"),
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
    <div className={styles.container}>
      <nav className={styles.navBlock}>
        {
          NAV_ITEMS.map(({ name, path }, i) => (
            <Link key={i} href={`/${lng}${path}`} className={classNames(styles.navItem, getClassName(path))}>
              {name}
            </Link>
          ))
        }
      </nav>
      <div className={styles.langBlock}>
        {
          [lng, ...languages.filter((l) => lng !== l)].map((lang, i) => (
            <Link
              href={`/${lang}/${pathname.slice(4)}`}
              key={i}
              className={classNames(styles.langItem, i ? '' : styles.currentLangItem)}>
              {lang.toUpperCase()}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default MobileMenu