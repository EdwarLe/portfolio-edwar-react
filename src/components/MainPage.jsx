import ContactMe from "./ContactMe"
import Fotter from "./Fotter"
import Home from "./Home"
import Projects from "./Projects"

const MainPage = () => {
  return (
    <main className="w-[min(100%,_1024px)] bg-blue-300 mx-auto">
        <Home />
        <Projects />
        <ContactMe />
        <Fotter />
    </main>
  )
}
export default MainPage