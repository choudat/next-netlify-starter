import { useEffect } from 'react';
import { initializeFaroMonitoring } from '../utils/faro';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initializeFaroMonitoring();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
