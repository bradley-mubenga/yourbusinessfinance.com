//COMPONENTS
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import About_Me from "./components/about_me";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import Head from 'next/head';
//
export default function Home() {
  return (
    <main>
      <Head>
        <title>KickStart Finance and Business Coaching</title>
        <meta
          name="description"
          content="Learn about the biggest mistakes business owners make with their business finances, to set up and manage your business accounting quickly and efficiently and how to understand your business financial needs and master financial forecasting and budgeting. Sign up now!"
        />
      </Head>
      <Header/>
      <Hero />
      <About />
      <About_Me />
      <Testimonials />
      <Footer /> 
    </main>
  )
}
