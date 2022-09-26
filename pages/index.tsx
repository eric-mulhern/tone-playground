import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Playground from '../components/playground';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tone Playground</title>
        <meta name="description" content="dick around mate" />
        <link rel="icon" href="https://i.kym-cdn.com/entries/icons/square/000/015/289/Internettoughkid.jpg" />
      </Head>

      <main className={styles.main}>
        <Playground />
      </main>

      <footer className={styles.footer}>
        oi u wanker u mate
      </footer>
    </div>
  );
};

export default Home;
