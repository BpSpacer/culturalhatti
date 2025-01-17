import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import { Hero } from './components/storefront/Hero';
import { CategoriesSelection } from './components/storefront/CategorySelection';
import { FeaturedProducts } from './components/storefront/FeaturedProducts';
import { Navbar } from './components/storefront/Navbar';
import { Footer } from './components/storefront/Footer';
import Geolocation from './components/geolocation';
import { ProductRow } from './components/sellerProductRow';
import arrow from "@/public/arrow.png";
import Image from "next/image";
import Link from 'next/link';


export default function Main() {
  return (
    <>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Navbar />
      </div>

      <div className="flex justify-end items-center space-x-4 sticky mb-2">
        <div className="relative w-48 h-10">
          <Image src={arrow} alt="Image" className="w-full h-full object-cover" />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-xs">
            <Link href="/sellonhut">Sell on Hatti</Link>
          </span>
        </div>
      </div>

      <main className="app transition-all ease-in ">
        <Home />
        <Canvas />
        <Customizer />
      </main>

      <section className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
      </section>

      <section className="max-w-3xl mx-auto text-center pt-52">
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-semibold">Find the best Culture</h1>
        <h1 className="text-primary text-2xl sm:text-5xl lg:text-6xl font-semibold">
          of{" "}
          <span className="inline-block">
            <Geolocation />
          </span>
        </h1>

        <p className="lg:text-lg text-muted-foreground mx-auto mt-5 w-[90%] font-normal text-base">
          CulturalHatti stands out as the premier marketplace for all things related to Culture,
          offering an unparalleled platform for both sellers and buyers alike.
        </p>
      </section>




      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <ProductRow category="newest" />
        <ProductRow category="sindhi" />
        <ProductRow category="punjabi" />
        <ProductRow category="pashtun" />
        <ProductRow category="balochi" />
        <ProductRow category="kashmiri" />
        <ProductRow category="saraiki" />
      </section>

      <Footer />
    </>
  );
}
