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
      <div className={classNames(styles.container)}>
        <div className={classNames(styles.content, global.Body2Regular)}>
          <div className={styles.headBlock}>
            <div className={classNames(global.Heading4Bold, styles.title)}>
              {t('PrivacyPolicy-main_title')}
            </div>
            <div className={global.Heading8Bold}>{t('PrivacyPolicy-last_updated')}</div>
            <div className={global.Heading8Bold}>
              {t('PrivacyPolicy-information')}
            </div>
          </div>
          <div className={classNames(styles.pointBlock)}>
            <div className={global.Body2Semibold}>
              {t('PrivacyPolicy-responsible_person')}
            </div>
            <div className={global.Body2Regular}>
              {t('PrivacyPolicy-responsible_person_details')}
            </div>
          </div>
          <div className={classNames(styles.pointBlock)}>
            <div className={global.Body2Semibold}>
              {t('PrivacyPolicy-data_processed')}
            </div>
            <div className={global.Body2Regular}>
              {t('PrivacyPolicy-data_processed_details.a')} <br />
              {t('PrivacyPolicy-data_processed_details.a_subtitle')}
            </div>
          </div>
          <div className={styles.textBlock}>
            <div className={styles.textRow}>
              -  {t('PrivacyPolicy-data_processed_details.data_collected.1')}
            </div>
            <div className={styles.textRow}>
              - {t('PrivacyPolicy-data_processed_details.data_collected.2')}
            </div>
            <div className={styles.textRow}>
              - {t('PrivacyPolicy-data_processed_details.data_collected.3')}
            </div>
            <div className={styles.textRow}>
              - {t('PrivacyPolicy-data_processed_details.data_collected.4')}
            </div>
            <div className={styles.textRow}>
              - {t('PrivacyPolicy-data_processed_details.data_collected.5')}
            </div>
            <div className={styles.textRow}>
              - {t('PrivacyPolicy-data_processed_details.data_collected.6')}
            </div>
            <div className={styles.textRow}>
              - {t('PrivacyPolicy-data_processed_details.data_collected.7')}
            </div>
            <div className={styles.textRow}>
              - {t('PrivacyPolicy-data_processed_details.data_collected.8')}
            </div>
            <div className={styles.textRow}>
              - {t('PrivacyPolicy-data_processed_details.data_collected.9')}
            </div>
            <div className={styles.textRow}>
              - {t('PrivacyPolicy-data_processed_details.data_collected.10')}
            </div>
          </div>
          <div className={styles.textBlock}>
            {t('PrivacyPolicy-data_processed_details.purpose')}
          </div>
          <div className={styles.textBlock}>
            {t('PrivacyPolicy-legal_basis')}<br /> {t('PrivacyPolicy-legal_basis_details')}<br />{t('PrivacyPolicy-storage_duration')}<br />{t('PrivacyPolicy-storage_duration_details')}
          </div>
          <div className={classNames(styles.pointBlock)}>
            <div className={global.Body2Semibold}>
              {t('PrivacyPolicy-data_subject_rights')}
            </div>
            <div className={global.Body2Regular}>
              {t('PrivacyPolicy-data_subject_rights_details.a')} {t('PrivacyPolicy-data_subject_rights_details.a_details')}<br />
              {t('PrivacyPolicy-data_subject_rights_details.b')} {t('PrivacyPolicy-data_subject_rights_details.b_details')}<br />
              {t('PrivacyPolicy-data_subject_rights_details.c')} {t('PrivacyPolicy-data_subject_rights_details.c_details')}<br />
              {t('PrivacyPolicy-data_subject_rights_details.d')} {t('PrivacyPolicy-data_subject_rights_details.d_details')}<br />
              {t('PrivacyPolicy-data_subject_rights_details.e')} {t('PrivacyPolicy-data_subject_rights_details.e_details')}<br />
              {t('PrivacyPolicy-data_subject_rights_details.f')} {t('PrivacyPolicy-data_subject_rights_details.f_details')}<br />
              {t('PrivacyPolicy-data_subject_rights_details.g')} {t('PrivacyPolicy-data_subject_rights_details.g_details')}<br />
            </div>
          </div>
          <div className={styles.textBlock}>
            {t('PrivacyPolicy-data_subject_rights_details.conclusion')}
          </div>
          <div className={classNames(styles.pointBlock)}>
            <div className={classNames(global.Body2Semibold, styles.mb32)}>
              {t('PrivacyPolicy-right_of_objection')}
            </div>
            <div className={global.Body2Regular}>
              {t('PrivacyPolicy-right_of_objection_details')}
            </div>
          </div >
        </div>
      </div >
    </>
  )
}

export default Page