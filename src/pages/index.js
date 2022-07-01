import Hero from '../components/home/Hero';
import Featured from '../components/home/Featured';
import LayoutNavbar from '../components/layouts/layoutNavbar';
import CartMenu from '../components/cart/cartMenu';

export default function Home() {
  return (
    <>
      <LayoutNavbar />
      <Hero />
      <Featured />
    </>
  );
}
