import Head from 'next/head'
import Image from 'next/image'
import ExtraBannerCard from '../components/Home/ExtraBannerCard'
import Navbar from '../components/Navbar/Navbar'
import HomeMain from '../HomeMain/HomeMain'
import styles from '../styles/Home.module.css'

export default function Home() {
 
  return (
    <div>
      {/* <Provider /> */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
  
      <Navbar />
      <HomeMain />
      <ExtraBannerCard />
      </main>
    </div>
  )
}
