import Apply from "../../components/Home/Apply/Apply";
import Category from "../../components/Home/Categories/Category";
import Feature from "../../components/Home/Feature/Feature";
import Hero from "../../components/Home/Hero/Hero";
import Jobs from "../../components/Home/LatestJobs/Jobs";


export default function Home() {
  return (
    <main>
      <Hero />
      <Apply />
      <Category />
      <Jobs />
      <Feature />
    </main>
  )
}
