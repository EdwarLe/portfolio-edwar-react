const Home = ({ handleCloseContactForm, t, language }) => {
  return (
    <main
      className="border-b border-b-slate-700 w-full min-h-screen p-3 flex justify-center"
      id="home"
    >
      <section className="flex flex-col gap-4 justify-center">
        <article className="flex flex-col gap-6 mt-36">
          <h1 className="text-3xl font-bold">{t("eng.title")}</h1>
          <p>{t("eng.description")}</p>
        </article>
        <section className="flex gap-6 text-white text-center flex-wrap">
          <a
            className="bg-slate-950 font-semibold p-2 px-4 hover:bg-green-600 hover:text-slate-950 hover:scale-105 transition-all dark:bg-red-600 flex items-center"
            href="#projects"
          >
            {t("eng.projects")}
          </a>
          <button
            onClick={handleCloseContactForm}
            className="bg-slate-950 font-semibold p-2 px-4 hover:bg-green-600 hover:text-slate-950 hover:scale-105 transition-all dark:bg-red-600 flex items-center"
          >
            {t("eng.contact")}
          </button>
          <a
            className="bg-slate-950 font-semibold p-2 px-4 hover:bg-green-600 hover:text-slate-950 hover:scale-105 transition-all dark:bg-red-600 flex items-center"
            href={language?.language === "es" ? "/[es]-full_stack-HF-edwar_leon.pdf" : "/[en]-full_stack-HF-edwar_leon.pdf"} download>
            {t("eng.cv")}
          </a>
        </section>
      </section>
    </main>
  );
};
export default Home;
