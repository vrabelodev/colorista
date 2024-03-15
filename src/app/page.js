import Image from 'next/image'
import styles from './page.module.css'
import { Cores } from './components/Cores'
import Navbar from './components/NavBar'
import FooterComponent from './components/footer'

export default function Home() {
  return (
    <main className={styles.main}>
    
        <Navbar/>
        <Cores/>
        <FooterComponent/>


    </main>
  )
}
