
"use client"
//components
import Card from "./Card/Card"
//libs
import { useTranslation } from '../../app/i18n/client'
//styles
import styles from "./styles.module.scss"
//images
import { baseImageUrl } from "@/services/API"
const unitLogo = `${baseImageUrl}/logos/UnitsHome.svg`




const PortfolioCards = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng)
  const CARDS = [
    {
      name: unitLogo,
      imgWidth: 286,
      imgHeight: 70,
      isNameImage: true,
      descr: t('cardsHoverCompanyTitle1Text1'),
      status: t('cardsHoverCompanyTitle1Text2'),
      sector: t('cardsHoverCompanyTitle1Text3'),
      link: 'https://www.unithome.eu/'
    },
    {
      name: t('portfolioCompany2'),
      isNameImage: false,
      descr: t('cardsHoverCompanyTitle2Text1'),
      status: t('cardsHoverCompanyTitle2Text2'),
      sector: t('cardsHoverCompanyTitle2Text3'),
    },
    {
      name: t('portfolioCompany3'),
      isNameImage: false,
      descr: t('cardsHoverCompanyTitle3Text1'),
      status: t('cardsHoverCompanyTitle3Text2'),
      sector: t('cardsHoverCompanyTitle3Text3'),
    }
  ]
  return (
    <div id="cards" className={styles.container}>
      <div className={styles.content}>
        {CARDS.map(({ name, descr, link, sector, status, isNameImage, imgHeight, imgWidth }, i) => <Card lng={lng} key={i} imgHeight={imgHeight} imgWidth={imgWidth} isNameImage={isNameImage} name={name} descr={descr} link={link} sector={sector} status={status} />)}
      </div>
    </div>
  )
}

export default PortfolioCards