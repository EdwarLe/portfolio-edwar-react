import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Menu from "./components/Menu";

function App() {
  const [menuSlider, setMenuSlider] = useState(false);

  return (
    <main className="bg-red-600 min-h-screen w-full overflow-hidden font-montserrat text-white">
      <Header setMenuSlider={setMenuSlider} menuSlider={menuSlider} />
      <Menu menuSlider={menuSlider} />
      <MainPage />
    </main>
  );
}

export default App;
