import '../../styles/globals.css';
import ProductsContextProvider from '../context/productContext';
import { CartContextProvider } from '../context/cartContext';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <div>
      <CartContextProvider>
        <ProductsContextProvider>
          {getLayout(<Component {...pageProps} />)}
        </ProductsContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default MyApp;
