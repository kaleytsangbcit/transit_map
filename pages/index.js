import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import Map from '../components/Map'
import Header from '../components/header'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Expo Line Transit Map</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <Header/>
      <Map/>
      <Footer/>

      </main>
    </>
  )
}
