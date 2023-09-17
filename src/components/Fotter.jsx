const Fotter = ({ handleCloseContactForm, t }) => {
  return (
    <article className="bg-zinc-900 p-3 flex flex-col gap-4 min-[500px]:flex-row min-[500px]:justify-around min-[500px]:text-center">
      <section>
        <h3 className="font-semibold">{t("eng.aboutFooter")}</h3>
        <article className="grid">
          <a href="#home" className="capitalize">{t("eng.home")}</a>
          <a href="#projects">{t("eng.projects")}</a>
          <p onClick={handleCloseContactForm} className="cursor-pointer">
            {t("eng.contact")}
          </p>
        </article>
      </section>
      <section>
        <h3 className="font-semibold">{t("eng.develop")}</h3>
        <h5>Edwar León Maldonado</h5>
      </section>
      <section className="font-semibold grid gap-2">
        <h3>{t("eng.social")}</h3>
        <div className="flex gap-4 text-3xl">
          <a href="https://www.linkedin.com/in/edwar-leon-54093964/" target="_blank" className="hover:scale-105 transition-all hover:text-purple-600 dark:hover:text-red-600">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://github.com/EdwarLe" target="_blank" className="hover:scale-105 transition-all hover:text-purple-600 dark:hover:text-red-600">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </section>
    </article>
  );
};
export default Fotter;
