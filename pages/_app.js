import MainFooter from '@/components/Footer/MainFooter'
import Prefooter from '@/components/Footer/Prefooter'
import MainNav from '@/components/Navbar/MainNav'
import TopNav from '@/components/Navbar/TopNav'
import styles from '@/styles/navbar.module.css'
import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }) {
  const [sticky, setSticky] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (router.pathname === '/') {
        if (window.scrollY >= 100) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts or route changes
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router.asPath]);
  return <> {sticky && <div className={styles.container}><TopNav /><MainNav /></div>} {router.pathname !== '/' && <><TopNav /><MainNav /></>} <Component {...pageProps} /> <Prefooter /> <MainFooter /> </>
}
