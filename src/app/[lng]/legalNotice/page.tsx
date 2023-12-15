//libs
import classNames from "classnames"
import { useTranslation } from '../../i18n'
//components
import PageBanner from "@/components/PageBanner/PageBanner"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"


interface Props {
  params: {
    lng: string;
  };
}

async function Page({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng)

  return (
    <>
      <PageBanner lng={lng} withoutContent={true} page="home" />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={classNames(global.Heading4Bold, styles.title)}>
            {t('impressum-page-title')}
          </div>
          <div className={styles.textBlock}>
            <div className={classNames(global.Heading8Bold, styles.subTitle)}>
              {t('impressum-informationTMG')}
            </div>
            <div className={classNames(global.Heading8Bold, styles.greenText)}>
              {t('impressum-companyName')}
            </div>
            <div className={classNames(global.Heading8Bold, styles.greenText)}>
              {t('impressum-addressPart1')} <br /> {t('impressum-addressPart2')}
            </div>
          </div>
          <div className={styles.textBlock}>
            <div className={classNames(global.Heading8Bold, styles.subTitle)}>
              {t('impressum-representedBy')}
            </div>
            <div className={classNames(global.Body3Regular, styles.textSubBlock)}>
              <div className={classNames(global.Body3Regular, styles.textSubBlockItem)}>
                {t('impressum-firstPerson')}<br /> {t('impressum-secondPerson')}
              </div>
              <div className={classNames(global.Body3Regular, styles.textSubBlockItem)}>
                {t('impressum-districtCourt')}
              </div>
              <div className={classNames(global.Body3Regular, styles.textSubBlockItem)}>
                {t('impressum-commercialRegister')}
              </div>
              <div className={classNames(global.Body3Regular, styles.textSubBlockItem)}>
                {t('impressum-vatID')}
              </div>
            </div>
          </div>
          <div className={styles.textBlock}>
            <div className={classNames(global.Heading8Bold, styles.subTitle)}>
              {t('impressum-contact')}
            </div>
            <div className={classNames(global.Body3Regular, styles.textSubBlock)}>
              <div className={classNames(global.Body3Regular, styles.textSubBlockItem)}>
                {t('impressum-telephone')}
              </div>
              <div className={classNames(global.Body3Regular, styles.textSubBlockItem)}>
                {t('impressum-email')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page