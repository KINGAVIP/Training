import Head from 'next/head' 

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Homew from '../components/Homew'
import Homes from '../components/Homes'
import Detail from '../components/Details'
import tailstyle from '../styles/Tailstyle.module.css'
import Todo from '../components/Todo'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>  
    <Head>
      <title>Home page</title>
      <meta name='keywords' content='web development by avi' />
    </Head>
    {/* <Todo></Todo> */}
    <Homes></Homes>
    </>
    
  )
}
