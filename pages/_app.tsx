import { HeadTag } from '../components/index';
import { Layout } from '../components/index'
// import '../lib/owl.carousel.min.js';

// import '../style/index.css';
import '../style/swiper.min.css';
import '../style/my.css';
// import 'swiper/css/swiper.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeadTag />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}