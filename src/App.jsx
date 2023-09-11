import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Menu from "./components/Menu";

function App() {
  const [menuSlider, setMenuSlider] = useState(false);
  const [isContactModal, setIsContactModal] = useState(false);
  

    const handleMenuSlider = () => {
      setMenuSlider(!menuSlider);
    };

  const handleCloseContactForm = () => {
    setIsContactModal(!isContactModal);
  };

  return (
    <main className="bg-[url(/bgPortfolio.webp)] bg-cover bg-fixed bg-center min-h-screen w-full  font-montserrat text-white overflow-hidden">
      <div className="bg-purple-950/90">
        <section className="bg-transparent fixed w-full h-[88px] backdrop-blur-xl z-20">
          <Header setMenuSlider={setMenuSlider} menuSlider={menuSlider} handleCloseContactForm={handleCloseContactForm} handleMenuSlider={handleMenuSlider}/>
        </section>
        <Menu menuSlider={menuSlider} handleCloseContactForm={handleCloseContactForm} handleMenuSlider={handleMenuSlider} />
        <MainPage
          handleCloseContactForm={handleCloseContactForm}
          isContactModal={isContactModal}
        />
      </div>
    </main>
  );
}

export default App;
