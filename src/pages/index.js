import Navbar from '../components/layouts/navbar';
import Hero from '../components/home/Hero';
import Featured from '../components/home/Featured';
import LayoutNavbar from '../components/layouts/layoutNavbar';

export default function Home() {
  return (
    <>
      <LayoutNavbar />
      <Hero />
      <Featured />
    </>
  );
}
