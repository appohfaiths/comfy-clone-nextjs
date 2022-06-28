import '../../styles/globals.css';
import {
  ProductsContext,
  ProductsContextProvider,
} from '../context/productContext';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
