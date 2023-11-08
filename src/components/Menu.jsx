import Social from "./Social";

const Menu = ({ handleMenuSlider, handleCloseContactForm, menuSlider, t }) => {
  return (
    <section
      className={`backdrop-blur-xl fixed min-h-[calc(100vh_-_140px)] min-[500px]:min-h-[calc(100vh_-_88px)] bottom-0 transition-all w-full z-20 grid place-items-center sm:w-1/2 duration-500 ${
        menuSlider ? "left-0" : "-translate-x-full"
      }`}
    >
      <ul className="flex flex-col justify-center items-center gap-4 h-full font-bold text-2xl">
        <li onClick={handleMenuSlider}>
          <a
            className="hover:text-green-600 dark:hover:text-red-600 border-b-2 border-b-transparent hover:border-b-slate-950 dark:hover:border-b-white transition-all"
            href="#home"
          >
            {t("eng.home")}
          </a>
        </li>
        <li onClick={handleMenuSlider}>
          <a
            className="hover:text-green-600 dark:hover:text-red-600 border-b-2 border-b-transparent hover:border-b-slate-950 dark:hover:border-b-white transition-all"
            href="#skills"
          >
            {t("eng.skills")}
          </a>
        </li>
        <li onClick={handleMenuSlider}>
          <a
            className="hover:text-green-600 dark:hover:text-red-600 border-b-2 border-b-transparent hover:border-b-slate-950 dark:hover:border-b-white transition-all"
            href="#projects"
          >
            {t("eng.projects")}
          </a>
        </li>
        <li
          onClick={() => {
            handleCloseContactForm();
            handleMenuSlider();
          }}
        >
          <button className="hover:text-green-600 dark:hover:text-red-600 border-b-2 border-b-transparent hover:border-b-slate-950 dark:hover:border-b-white transition-all">
            {t("eng.contact")}
          </button>
        </li>
      </ul>
      <section className="absolute top-[95px] left-0">
        <Social />
      </section>
    </section>
  );
};
export default Menu;
