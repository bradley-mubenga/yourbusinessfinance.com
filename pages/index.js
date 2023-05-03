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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;700&display=swap" rel="stylesheet" />

      </Head>
      <Header/>
      <About_Me />
      <Hero />
      <About />
      <Testimonials />
      <Footer /> 
    </main>
  )
}
