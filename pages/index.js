//COMPONENTS
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Testimonials from "./components/testimonials";
//
export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <About />
      <Testimonials />
    </main>
  )
}
