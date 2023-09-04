import HamburguerMenu from "./HamburguerMenu";
import LogoSvg from "./LogoSvg";

const Header = ({menuSlider, setMenuSlider}) => {

  const handleMenuSlider = () => {
    setMenuSlider(!menuSlider);
  };
  return (
    <nav className="h-full flex w-[min(100%,_1024px)] mx-auto justify-between p-4 items-center">
      <section className="flex gap-2 items-center">
        <div className="w-12">
          <LogoSvg />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-center leading-none">EDWAR LEÓN</h3>
          <h6 className="font-light text-sm text-center">WEB DEVELOPER</h6>
        </div>
      </section>
      <HamburguerMenu handleMenuSlider={handleMenuSlider} />
    </nav>
  );
};
export default Header;
