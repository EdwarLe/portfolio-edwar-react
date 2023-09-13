import MenuDarkLanguage from "./MenuDarkLanguage";

const Menu = ({ handleMenuSlider, handleCloseContactForm, menuSlider, handleDarkMode }) => {
  return (
    <section
      className={`backdrop-blur-xl fixed min-h-[calc(100vh_-_88px)] bottom-0 transition-all w-full z-20 grid place-items-center sm:w-1/2 duration-500 ${
        menuSlider ? "left-0" : "-translate-x-full"
      }`}
    >
      <section className=" flex min-[500px]:hidden absolute top-0 left-0 w-full p-4">
        <MenuDarkLanguage handleDarkMode={handleDarkMode} />
      </section>
      <ul className="flex flex-col justify-center items-center gap-4 h-full font-bold text-2xl">
        <li onClick={handleMenuSlider}>
          <a href="#home">Home</a>
        </li>
        <li onClick={handleMenuSlider}>
          <a href="#projects">Projects</a>
        </li>
        <li
          onClick={() => {
            handleCloseContactForm();
            handleMenuSlider();
          }}
        >
          <button>Contact Me</button>
        </li>
      </ul>
    </section>
  );
};
export default Menu;
