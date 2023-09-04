import ContactMe from "./ContactMe"
import Fotter from "./Fotter"
import Home from "./Home"
import Projects from "./Projects"
import Skills from "./Skills"

const MainPage = () => {
  return (
    <main className="w-[min(100%,_1024px)] mx-auto">
        <Home />
        <Skills />
        <Projects />
        <ContactMe />
        <Fotter />
    </main>
  )
}
export default MainPage