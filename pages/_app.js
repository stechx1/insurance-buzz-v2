import MainFooter from '@/components/Footer/MainFooter'
import Prefooter from '@/components/Footer/Prefooter'
import MainNav from '@/components/Navbar/MainNav'
import TopNav from '@/components/Navbar/TopNav'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <><TopNav /><MainNav /> <Component {...pageProps} /> <Prefooter /> <MainFooter /> </>
}
