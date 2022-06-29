import '../../styles/globals.css';
import ProductsContextProvider from '../context/productContext';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <div>
      <ProductsContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </ProductsContextProvider>
    </div>
  );
}

export default MyApp;
