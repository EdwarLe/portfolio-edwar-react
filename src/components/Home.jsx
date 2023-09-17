const Home = ({ handleCloseContactForm, t }) => {
  return (
    <main
      className="border-b border-b-slate-700 w-full min-h-screen p-3 flex justify-center"
      id="home"
    >
      <section className="flex flex-col gap-4 justify-center">
        <article className="flex flex-col gap-6 mt-28">
          <h1 className="text-3xl font-bold">{t("eng.title")}</h1>
          <p>{t("eng.description")}</p>
        </article>
        <section className="flex gap-6 text-white">
          <a
            className="bg-green-600  font-semibold p-2 px-4 hover:bg-purple-600 hover:scale-105 transition-all dark:bg-red-600"
            href="#projects"
          >
            {t("eng.projects")}
          </a>
          <button
            onClick={handleCloseContactForm}
            className="bg-green-600 font-semibold p-2 px-4 hover:bg-purple-600 hover:scale-105 transition-all dark:bg-red-600"
          >
            {t("eng.contact")}
          </button>
        </section>
      </section>
    </main>
  );
};
export default Home;
