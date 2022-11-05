import React from 'react'
import styles from './Driver.module.css'
import Drive from '../../images/loco.jpg'


const Driver = () => {
  return (
    <div className={styles.drive}>
        <div className={styles.left}>
            <img src={Drive} alt="/" />
        </div>
        <div>
            <h2>Find a perfect car <span>for your drive</span></h2>
            <p>Find the perfect car for you and skrrrttt</p>
            <button>Browse Cars</button>
        </div>

    </div>
  )
}

export default Driver