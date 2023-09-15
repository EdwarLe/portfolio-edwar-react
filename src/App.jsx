import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Menu from "./components/Menu";
import Social from "./components/Social";

function App() {
  const [menuSlider, setMenuSlider] = useState(false);
  const [isContactModal, setIsContactModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(null);

  console.log(isDarkMode)

  const handleMenuSlider = () => {
    setMenuSlider(!menuSlider);
  };

  const handleCloseContactForm = () => {
    setIsContactModal(!isContactModal);
  };

  const handleDarkMode = () => {
    setIsDarkMode(isDarkMode === "dark" ? "" : "dark");
  };


  useEffect(() => {
   const darkInLocal = localStorage.getItem("dark")
   darkInLocal ? setIsDarkMode('dark') : setIsDarkMode(null)
  }, [])
  
  
  useEffect(() => {
    const darkInLocal = localStorage.getItem("dark");
    if(darkInLocal) {
      localStorage.removeItem('dark')
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.setItem('dark', true)
      document.documentElement.classList.add('dark')
      setIsDarkMode('dark')
    }
  }, [isDarkMode]);

  return (
    <main className="bg-[url(/bgPortfolio.webp)] bg-cover bg-fixed bg-center min-h-screen w-full  font-montserrat text-white overflow-hidden relative">
      <div className="bg-purple-950/90 dark:bg-black/80 transition-colors">
        <section className="bg-transparent fixed w-full h-[88px] backdrop-blur-xl z-20">
          <Header
            setMenuSlider={setMenuSlider}
            menuSlider={menuSlider}
            handleCloseContactForm={handleCloseContactForm}
            handleMenuSlider={handleMenuSlider}
            handleDarkMode={handleDarkMode}
            isDarkMode={isDarkMode}
          />
        </section>
        <Menu
          menuSlider={menuSlider}
          handleCloseContactForm={handleCloseContactForm}
          handleMenuSlider={handleMenuSlider}
          handleDarkMode={handleDarkMode}
        />
        <MainPage
          handleCloseContactForm={handleCloseContactForm}
          isContactModal={isContactModal}
        />
        <Social />
      </div>
    </main>
  );
}

export default App;
