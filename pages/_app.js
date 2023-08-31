import MainFooter from '@/components/Footer/MainFooter';
import Prefooter from '@/components/Footer/Prefooter';
import MainNav from '@/components/Navbar/MainNav';
import TopNav from '@/components/Navbar/TopNav';
import styles from '@/styles/navbar.module.css';
import '@/styles/globals.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }) {
  const [sticky, setSticky] = useState(false);

  const router = useRouter();
  const isAboutUsPage = router.pathname === '/about-us';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts or route changes
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router.asPath]);
  return (
    <>
        <div className={`${sticky ? styles.sticky : styles.notSticky} `}>
          <TopNav />
          <MainNav />
        </div>
      <Component {...pageProps} /> <Prefooter /> <MainFooter />{' '}
    </>
  );
}
