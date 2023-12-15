"use client"
//components
import Item from "./Item/Item"
//libs
import { useTranslation } from '../../app/i18n/client'
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
import React from 'react'
//images
import { baseImageUrl } from "@/services/API"
const image1 = `${baseImageUrl}/aboutUs/aboutUs1.png`
const image2 = `${baseImageUrl}/aboutUs/aboutUs2.png`
const image3 = `${baseImageUrl}/aboutUs/aboutUs3.png`




const AboutUs = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng)


  const CARD_DATA = [
    {
      text: t('homePageAboutUsSection01'),
      image: image1,
    },
    {
      text: t('homePageAboutUsSection02'),
      image: image2,
    },
    {
      image: image3,
      text: t('homePageAboutUsSection03'),
    }
  ]

  return (
    <div id="aboutUs" className={styles.container}>
      <div className={styles.content}>
        <div className={global.Heading5bold}>
          {t('homePageAboutUsSection')}
        </div>
        <div className={styles.cardsBlock}>
          {
            CARD_DATA.map(({ text, image }, i) => <Item key={i} text={text} image={image} num={i + 1} />)
          }
        </div>
      </div>
    </div>
  )
}

export default AboutUs