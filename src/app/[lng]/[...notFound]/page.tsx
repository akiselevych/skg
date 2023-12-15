"use client"
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "@/styles/notFoundPage.module.scss"
import Image from "next/image";
import { baseImageUrl } from "@/services/API";
import global from "@/styles/global.module.scss"
import PageBanner from "@/components/PageBanner/PageBanner";
import classNames from "classnames";

const image = `${baseImageUrl}/banners/40banner.png`;



interface NotFoundProps {
  params: {
    lng: string;
  };
}

function NotFound({ params }: NotFoundProps) {
  const { t } = useTranslation(params.lng)
  return (
    <>
      <PageBanner lng={params.lng} withoutContent={true} page="home" />
      <div className={styles.container}>
        <div className={styles.content}>
          <Image height={440} width={426} className={styles.image} src={image} alt={"error"} />
          <div className={styles.textBlock}>
            <div className={global.Heading4Bold}>
              {t('404PageTitle')}
            </div>
            <div className={classNames(global.Body2Regular, styles.text)}>
            </div>
          </div>
        </div>
      </div >
    </>
  )
};

export default NotFound;
