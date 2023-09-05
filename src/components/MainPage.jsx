import { useState } from "react"
import ContactMe from "./ContactMe"
import Fotter from "./Fotter"
import Home from "./Home"
import Projects from "./Projects"
import Skills from "./Skills"

const MainPage = () => {
  const [isContactModal, setIsContactModal] = useState(false)

  const handleCloseContactForm = () => {
    setIsContactModal(!isContactModal)
  }

  console.log(isContactModal)
  return (
    <main className="w-[min(100%,_1024px)] mx-auto relative">
        <Home handleCloseContactForm={handleCloseContactForm}/>
        <Skills />
        <Projects />
        <ContactMe handleCloseContactForm={handleCloseContactForm} isContactModal={isContactModal}/>
        <Fotter handleCloseContactForm={handleCloseContactForm}/>
    </main>
  )
}
export default MainPage