import Script from 'next/script'
import '../styles/globals.css'
import Header from '../components/Header.js'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'></Script>
            <Script src='https://code.jquery.com/jquery-3.6.0.min.js'></Script>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
