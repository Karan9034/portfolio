import Script from 'next/script'
import Layout from '../components/Layout.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'></Script>
            <Script src='https://code.jquery.com/jquery-3.6.0.min.js'></Script>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
