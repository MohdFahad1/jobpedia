import Apply from "../../components/Home/Apply/Apply";
import Category from "../../components/Home/Categories/Category";
import Feature from "../../components/Home/Feature/Feature";
import Hero from "../../components/Home/Hero/Hero";
import Testimonials from "../../components/common/Testimonials/Testimonials";


export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <Apply />
      <Feature />
      <Testimonials />
    </main>
  )
}
