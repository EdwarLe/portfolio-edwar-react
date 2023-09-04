import HamburguerMenu from "./HamburguerMenu";
import LogoSvg from "./LogoSvg";

const Header = ({menuSlider, setMenuSlider}) => {

  const handleMenuSlider = () => {
    setMenuSlider(!menuSlider);
  };
  return (
    <nav className="bg-indigo-950 h-[88px] flex w-[min(100%,_1024px)] right-1/2 translate-x-1/2 justify-between p-4 fixed items-center">
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
