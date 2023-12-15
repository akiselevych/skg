"use client"
import { FC, useState } from 'react'
import { useTranslation } from '../../../app/i18n/client'
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
import classNames from "classnames"
import Image from 'next/image'
import { baseImageUrl } from "@/services/API"
const arr = `${baseImageUrl}/icons2/visitVebsiteArr.svg`


interface Props {
  name: any
  imgWidth?: number
  imgHeight?: number
  descr: string
  status: string
  sector: string
  link?: string
  isNameImage: boolean,
  lng: string
}

const Card: FC<Props> = ({ name, descr, link, sector, status, isNameImage, imgHeight, imgWidth, lng }) => {
  const { t } = useTranslation(lng)
  const [clicked, setClicked] = useState(false)
  return (
    <div onClick={() => setClicked(prev => !prev)} className={classNames(styles.flipCard, clicked ? styles.clicked : '')}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          {
            isNameImage ? <Image width={imgWidth} height={imgHeight} className={styles.imageLogo} src={name} alt="logo" />
              : <div className={classNames(styles.logo, global.Heading6Semibold)}>
                {name}
              </div>
          }
        </div>
        <div className={styles.flipCardBack}>
          {
            isNameImage ? <Image width={imgWidth} height={imgHeight} className={styles.backImageLogo} src={name} alt="logo" />
              : <div className={classNames(styles.backLogo, global.Heading6Semibold)}>
                {name}
              </div>
          }
          <div className={classNames(styles.descr, global.Body4Regular)}>
            {descr}
          </div>
          <div className={classNames(styles.status, global.Body3Regular)}>
            <span className={global.Body3Medium}>{t('cardStatus')}:</span> {status}
          </div>
          <div className={classNames(styles.sector, global.Body3Regular)}>
            <span className={global.Body3Medium}>{t('cardSector')}:</span> {sector}
          </div>
          {
            link && <a target='_blank' className={styles.link} href={link}>{t('cardWisitWebsite')} <Image width={16} height={16} src={arr} alt={"Visit website"} /> </a>
          }
        </div>
      </div>
    </div>
  )
}

export default Card