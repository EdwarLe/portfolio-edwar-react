const Fotter = ({ handleCloseContactForm, t, language }) => {
  return (
    <article className="dark:bg-zinc-900 bg-slate-950 p-3 flex flex-col gap-4 min-[500px]:flex-row min-[500px]:justify-around min-[500px]:text-center transition-colors text-white">
      <section>
        <h3 className="font-semibold">{t("eng.aboutFooter")}</h3>
        <article className="grid">
          <a href="#home" className="capitalize">
            {t("eng.home")}
          </a>
          <a href="#projects">{t("eng.projects")}</a>
          <a href="#skills">{t("eng.skills")}</a>
          <p onClick={handleCloseContactForm} className="cursor-pointer">
            {t("eng.contact")}
          </p>
          <a
            href={language?.language === "es" ? "/front-end_edwar-leon_HF.pdf" : "/front-end_edwar-leon_HF_EN.pdf"} download
          >
            {t("eng.cv")}
          </a>
        </article>
      </section>
      <section>
        <h3 className="font-semibold">{t("eng.develop")}</h3>
        <h5>Edwar León Maldonado</h5>
      </section>
      <section className="font-semibold grid gap-2">
        <h3>{t("eng.social")}</h3>
        <div className="flex gap-4 text-4xl">
          <a
            href="https://www.linkedin.com/in/edwar-leon-54093964/"
            target="_blank"
            className="hover:scale-105 transition-all hover:text-green-600 dark:hover:text-red-600"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/EdwarLe"
            target="_blank"
            className="hover:scale-105 transition-all hover:text-green-600 dark:hover:text-red-600"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </section>
    </article>
  );
};
export default Fotter;
