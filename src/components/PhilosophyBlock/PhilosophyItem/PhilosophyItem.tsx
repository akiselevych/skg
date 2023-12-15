//libs
import { FC } from "react"
import { StaticImageData } from "next/image"
//componenys
import Image from "next/image"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
import classNames from "classnames"

interface IProps {
  title: string
  descr: string[]
  image: string,
  num: number
}


const PhilosophyItem: FC<IProps> = ({ title, descr, image, num }) => {
  return (
    <div className={classNames(styles[`number${num}`], num % 2 ? styles.container : styles.containerReverse)}>
      <div className={styles.imageBlock}>
        <div className={styles.imageBg}>  </div>
        <Image width={307} height={274} className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.textBlock}>
        <div className={classNames(global.Heading7Semibold, styles.title)}>
          {title}
        </div>
        <div className={classNames(global.Body1Regular, styles.descrBlock)}>
          {
            descr.map((item, i) => (
              <div key={i} className={styles.descrItem}>{item}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PhilosophyItem