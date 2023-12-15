//components
import Image from "next/image"
import Link from "next/link"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//images
import logo from "public/images/logos/logo.svg"
import classNames from "classnames"


const SECOND_COLUMN_ITEMS = [{
  name: "Homepage",
  link: "/homepage"
},
{
  name: "Philosophy",
  link: "/philosophy"
},
{
  name: "Portfolio",
  link: "/portfolio"
}]

const THIRD_COLUMN_ITEMS = [{
  name: "Contact",
  link: "/contact"
},
{
  name: "Legal Notice",
  link: "/legalNotice"
},
{
  name: "Privacy policy",
  link: "/privacyPolicy"
}]

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={classNames(styles.column, styles.FirstColumn)}>
          <Link className={styles.logoLink} href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <div className={global.Body5Medium} >
            We are committed to providing our management teams with strategic "bigger picture" guidance.
          </div>
        </div>
        <div className={classNames(styles.column, global.Body3Medium)}>
          {
            SECOND_COLUMN_ITEMS.map(({ name, link }, i) => (
              <Link href={link} key={i} className={styles.colItem}>
                {name}
              </Link>
            ))
          }
        </div>
        <div className={styles.column}>
          {
            THIRD_COLUMN_ITEMS.map(({ name, link }, i) => (
              <Link href={link} key={i} className={styles.colItem}>
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