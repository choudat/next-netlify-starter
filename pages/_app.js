import '@styles/globals.css'
import Header from '../components/Header'

function Application({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default Application
