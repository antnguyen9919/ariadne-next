import React from 'react'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import Image from 'next/image'
const Layout = ({children}) => {
  return (
    <>
    <Nav/>
    <div className={styles.container}>
        
        <main className = {styles.main}>
            {children}
        </main>
    </div>

    <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}

export default Layout