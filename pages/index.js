import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Projects from "../components/sections/project";
import Skills from "../components/sections/skills";
import Contact from "../components/sections/contact";



export default function Home() {
  return (
    
    <Layout> 
      < div  className="main" > 
    <Hero/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    </div >
    </Layout>
    
  )
}
