import React from 'react'
import styles from "./DesignCard.module.css"


const DesignCard = ({color, title, description}) => {
  return (
    <main className={styles.designCard}>
        <div className="flex">
    <div style={{background : color}} className={styles.designCardBG} />
    <div className={styles.dcRight}>
        <div style={{color : color}} className={styles.designCardTitle}>{title ? title : "-"}</div>
        <div className={styles.designCardDesc}>{description ? description : "-"}</div>
    </div>
    </div>
    </main>
  )
}

export default DesignCard