import HamburguerMenu from "./HamburguerMenu";
import LogoSvg from "./LogoSvg";
import MenuDarkLanguage from "./MenuDarkLanguage";

const Header = ({ handleMenuSlider, handleDarkMode, isDarkMode, menuSlider }) => {
  return (
    <nav className="h-full flex w-[min(100%,_1024px)] mx-auto justify-between p-4 items-center">
      <section className="flex gap-2 items-center">
        <div className="w-12">
          <LogoSvg isDarkMode={isDarkMode} />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-center leading-none">
            EDWAR LEÓN
          </h3>
          <h6 className="font-light text-sm text-center">WEB DEVELOPER</h6>
        </div>
      </section>
      <section className="hidden min-[500px]:flex">
        <MenuDarkLanguage handleDarkMode={handleDarkMode} />
      </section>
      <HamburguerMenu handleMenuSlider={handleMenuSlider} menuSlider={menuSlider} />
    </nav>
  );
};
export default Header;
