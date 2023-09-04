import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Menu from "./components/Menu";

function App() {
  const [menuSlider, setMenuSlider] = useState(false);

  return (
    <main className="bg-[url(/bgPortfolio.webp)] bg-cover bg-fixed bg-center min-h-screen w-full  font-montserrat text-white">
      <div className="bg-slate-950/90">
        <section className="bg-transparent fixed w-full h-[88px] backdrop-blur-xl">
      <Header setMenuSlider={setMenuSlider} menuSlider={menuSlider} />
      </section>
      <Menu menuSlider={menuSlider} />
      <MainPage />
      </div>
    </main>
  );
}

export default App;
