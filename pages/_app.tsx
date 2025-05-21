// Import du CSS global (inclut Tailwind)
import '../styles/globals.css';

// Fonction principale qui rend chaque page
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;