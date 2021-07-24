import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni cum distinctio amet nesciunt quidem quae mollitia ipsam vitae! Molestiae aut temporibus repellat incidunt nisi, iste reprehenderit dolorum cupiditate ducimus! Architecto.</p>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea harum doloremque alias? Eveniet voluptatibus ea exercitationem delectus quas voluptate necessitatibus dolorum officia tenetur quidem! Delectus consectetur quis excepturi et aliquid.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
        </Link>
    </div>
    </>
  )
}
