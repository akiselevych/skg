"use client"
//components
import Image from "next/image"
import Link from "next/link"
import { StaticImageData } from "next/image"
import { FC } from "react"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"

import React from 'react'
import classNames from "classnames"

interface IProps {
  text: string
  image: string,
  num: number
}

const AboutUs: FC<IProps> = ({ text, image, num }) => {



  return (
    <div className={num % 2 ? styles.container : styles.containerReverse}>
      <div className={styles.imageBlock}>
        <Image width={524} height={354} src={image} alt="image" />
      </div>
      <div className={styles.textBlock} >
        <div className={classNames(global.Body2Regular, styles.text, styles[`number${num}`])}>
          {text}
        </div>
      </div>
    </div >
  )
}

export default AboutUs