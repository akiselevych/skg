'use client'
//libs
import { FC } from "react"
import classNames from "classnames"
import Link from "next/link"
import { useTranslation } from '../../app/i18n/client'
//conponrnts
import Image from "next/image"
import ContactForm from "@/components/ContactForm/ContactForm"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//images
import { baseImageUrl } from "@/services/API"
const arrow = `${baseImageUrl}/icons2/dropdownArr.svg`

interface ITranslate {
  lng: string
}

interface Props extends ITranslate {
  page: 'home' | 'portfolio' | 'philosophy' | 'contact',
  nextBlockLink?: string;
  withoutContent?: boolean;
  headerOnly?: boolean;
}

const PageBanner: FC<Props> = ({ page, nextBlockLink, withoutContent, headerOnly, lng }) => {
  const { t } = useTranslation(lng)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  let content

  if (!withoutContent && !headerOnly && page !== `contact`) {
    content = <>
      <div className={styles.titleBlock}>
        <div className={classNames(styles.title, global.Heading1Bold)}>
          {t("homePageBanner1")}
        </div>
        <div className={classNames(global.Heading3Medium, styles.subtitel)}>
          {t("homePageBanner2")}
        </div>
      </div>
      <Link
        href={nextBlockLink ?? ''} onClick={handleScroll}
        className={styles.btnBlock}>
        <div className={classNames(global.Heading8Medium, styles.btnBlockText)}>
          {t("homePageBanner3")}
        </div>
        <Image width={28} height={28} priority src={arrow} alt="Learn more" />
      </Link >
    </>
  } else if (page === "contact") {
    content = <ContactForm t={t} />
  }

  let classes = []

  if (withoutContent) {
    classes.push(styles.withoutContent)
  } else if (headerOnly) {
    classes.push(styles.headerOnly)
  }

  return (
    <div className={classNames(styles.container, styles[page], ...classes)}>
      <div className={classNames(styles.content)}>
        {content}
      </div>
    </div>
  )
}

export default PageBanner





