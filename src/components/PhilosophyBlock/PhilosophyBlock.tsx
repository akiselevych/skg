"use client"
//components
import classNames from "classnames"
import PhilosophyItem from "./PhilosophyItem/PhilosophyItem"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//lbs
import { useTranslation } from '../../app/i18n/client'
//images 
import { baseImageUrl } from "@/services/API"
const Philosophy1 = `${baseImageUrl}/philosophy/Philosophy1.png`
const Philosophy2 = `${baseImageUrl}/philosophy/Philosophy2.png`
const Philosophy3 = `${baseImageUrl}/philosophy/Philosophy3.png`
const Philosophy4 = `${baseImageUrl}/philosophy/Philosophy4.png`




const PhilosophyBlock = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng)

  const CARDS_DATA = [
    {
      title: t('ourApproachPhilosophyTitle1'),
      descr: [
        `${t('ourApproachPhilosophyTitle1Text1')} ${t('ourApproachPhilosophyTitle1Text2')}`,
        t('ourApproachPhilosophyTitle1Text3'),
      ],
      image: Philosophy1
    },
    {
      title: t('ourApproachPhilosophyTitle2'),
      descr: [
        t('ourApproachPhilosophyTitle2Text1'),
        t('ourApproachPhilosophyTitle2Text2'),
        t('ourApproachPhilosophyTitle2Text3'),],
      image: Philosophy2
    },
    {
      title: t('ourApproachPhilosophyTitle3'),
      descr: [
        t('ourApproachPhilosophyTitle3Text1')
      ],
      image: Philosophy3
    },
    {
      title: t('ourApproachPhilosophyTitle4'),
      descr: [
        t('ourApproachPhilosophyTitle4Text1')
      ],
      image: Philosophy4
    }
  ]
  return (
    <div id="philosophyBlock" className={styles.container}>
      <div className={styles.content}>
        <div className={classNames(styles.titleBlock)}>
          <div className={classNames(global.Heading2Semibold, styles.title)}>
            {t('ourApproachPhilosophyTitle')}
          </div>
          <div className={classNames(global.Body1Regular, styles.subTitle)}>
            {t('ourApproachPhilosophyText')}
          </div>
        </div>
        <div className={styles.cards}>
          {
            CARDS_DATA.map(({ descr, image, title }, i) => <PhilosophyItem key={i} image={image} descr={descr} title={title} num={i + 1} />)
          }
        </div>
      </div>
    </div>
  )
}

export default PhilosophyBlock