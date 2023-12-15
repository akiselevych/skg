"use client"
//libs
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
import classNames from "classnames"

type Inputs = {
  name: string
  email: string,
  phone: string,
  message: string
}

const ContactForm = ({ t }: { t: (arg: string) => string }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const [staus, setStatus] = useState<"loading" | "error" | "idle">('idle')

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setStatus("loading")
    const rewData = {
      phone_number: data.phone,
      name: data.name,
      message: data.message,
      email: data.email
    }
    console.log(JSON.stringify(rewData))
    fetch("https://api.skg-global.co//send_email/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rewData)
    }).then((res) => {
      setStatus
      console.log(res)
      setStatus("idle")
      reset()
    }).catch((err) => {
      setStatus("error")
    })
  }

  let statusElement

  if (staus === "loading") {
    statusElement = <p className={styles.status}>{t("requestStatusLoading")}</p>
  }
  if (staus === "error") {
    statusElement = <p className={styles.status}>{t("requestStatusError")}</p>
  }

  return (
    <div className={styles.content} >
      <div className={classNames(styles.textBlock, global.Body1Regular)}>
        {t("contactUsWindowText")}
      </div>
      <form className={classNames(styles.form, global.Body3Semibold)} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.topRow}>
          <div className={styles.inpuBlock}>
            <label className={global.Body3Semibold} >{t('contactUsInfo1')}*</label>
            <input placeholder={t('contactUsInfo1BackText')} {...register("name", {
              required: "Field is required"
            })} className={styles.input} />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          </div>
          <div className={styles.inpuBlock}>
            <label className={global.Body3Semibold} >{t('contactUsInfo2')}*</label>
            <input placeholder={t('contactUsInfo2BackText')} {...register("phone", {
              required: "Field is required",
              pattern: {
                value: /^\+?\d{10,}$/,
                message: "Invalid phone number",
              }
            })} className={styles.input} />
            {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
          </div>
          <div className={styles.inpuBlock}>
            <label className={global.Body3Semibold} >{t('contactUsInfo3')}*</label>
            <input placeholder={t('contactUsInfo3BackText')} {...register("email", {
              required: "Field is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              }
            })} className={styles.input} />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>
        </div>
        <div className={styles.inpuBlock}>
          <label className={global.Body3Semibold} >{t('contactUsInfo4')}</label>
          <textarea className={styles.textArea} placeholder={t('contactUsInfo4BackText')} {...register("message")}></textarea>
        </div>
        <div className={styles.bottomRow}>
          <input className={global.primaryButton} type="submit" value={t('contactUsButton')} />
          {statusElement}
        </div>
      </form>
    </div>
  )
}

export default ContactForm