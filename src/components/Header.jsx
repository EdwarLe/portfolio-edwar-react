import { useState } from "react";
import HamburguerMenu from "./HamburguerMenu";
import LogoSvg from "./LogoSvg";

const Header = () => {
  const [menuSlider, setMenuSlider] = useState(false);

  const handleMenuSlider = () => {
    setMenuSlider(!menuSlider);
  };
  return (
    <nav className="bg-blue-500 h-[88px] flex w-[min(100%,_1024px)] mx-auto justify-between p-6 fixed">
      <section className="flex gap-2 items-center">
        <div className="w-10 bg-red-300">
          <LogoSvg />
        </div>
        <div>
          <h3 className="">EDWAR LEÓN</h3>
          <h6>WEB DEVELOPER</h6>
        </div>
      </section>
      <HamburguerMenu handleMenuSlider={handleMenuSlider} />
      <section
        className={`bg-yellow-300 fixed min-h-screen transition-all top-0 w-full ${
          menuSlider ? "left-0" : "-left-full"
        }`}
      >
        <ul className="grid grid-cols-3">
          <li>Home</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </section>
    </nav>
  );
};
export default Header;
