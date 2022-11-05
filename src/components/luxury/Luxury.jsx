import React from 'react'
import styles from './Luxury.module.css'

const Luxury = () => {
  return (
    <div className={styles.luxury}>
        <div className={styles.heading}>
            <h2>Luxury <span>Selection</span> </h2>
            <div className={styles.text_bg}>
                <p>
                   Select from the top luxury vehicles
                </p>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/" />
                <div className={styles.content}>
                    <h3>Rolls Royce</h3>

                </div>

            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1617547604473-d9e721d57072?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="/" />
                <div className={styles.content}>
                    <h3>Lexus</h3>

                </div>

            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/" />
                <div className={styles.content}>
                    <h3>Tesla</h3>

                </div>

            </div>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1611656825455-391f7cc38b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80" alt="/" />
                <div className={styles.content}>
                    <h3>Aston Martin</h3>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Luxury