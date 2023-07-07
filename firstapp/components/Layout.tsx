import React from 'react'
import styles from '../styles/Home.module.css'
const Layout=({children})=>{
    return(
        <>   
         <div className={styles.container}>
        <div className={styles.main}>
            {children}
            <h1>hi</h1>
        </div>
    </div>
    </>

  )
}
export default Layout
