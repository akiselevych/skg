'use client'
//libs
import { useTranslation } from '../../app/i18n/client'
import { FC, MouseEventHandler, RefObject, useEffect, useState } from "react";
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import closeIcon from './images/closeIcon.svg'



const Banner = ({ lng }: { lng: string }) => {
  const [isBanner, setIsBanner] = useState(false);
  const { t } = useTranslation(lng)


  useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && !JSON.parse(localStorage.getItem("cookieProtection"))) {
      setIsBanner(true)
    }

    //eslint-disable-next-line
  }, []);

  const btnCloseHandler = () => {
    localStorage.setItem("cookieProtection", JSON.stringify(true))
    setIsBanner(false);
  }
  return (
    <>
      {isBanner &&
        <div className={styles.overlay}>
          <div className={`${styles.container}`}>
            <Image width={16} height={16} src={closeIcon} alt={"Close banner"} onClick={btnCloseHandler} className={styles.closeBtn} />
            <div className={styles.header}>
              <div className={`${global.Heading7Semibold} ${styles.title}`}>
                {t("CoockieBannerTitle")}
              </div>
            </div>
            <div className={`${global.Body4Regular} ${styles.text}`}>
              {t("CoockieBannerText")}
            </div>
            <div className={styles.btnContainer}>
              <div className={`${global.Body3Regular} ${styles.acceptBtn}`} onClick={btnCloseHandler}>
                {t("CoockieBannerBtn1")}
              </div>
              <div className={`${global.Body3Regular} ${styles.declineBtn}`} onClick={btnCloseHandler}>
                {t("CoockieBannerBtn2")}
              </div>
            </div>
          </div>
        </div>
      }
    </>

  );
};

export default Banner;
