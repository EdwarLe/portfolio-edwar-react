const MenuDarkLanguage = ({
  handleDarkMode,
  isDarkMode,
  handleChangeLanguage,
  t,
  idLng
}) => {
  return (
    <section className="flex items-center justify-between p-2 min-[500px]:p-0 gap-4 px-4">
      <div className="bg-black/20 p-2 rounded-md flex gap-2">
        <label htmlFor={idLng}>{t("eng.lang")}</label>
        <select
          onChange={handleChangeLanguage}
          className="bg-transparent outline-none"
          name={idLng}
          id={idLng}
        >
          <option className="bg-black/60" value="es">
            EN
          </option>
          <option className="bg-black/60" value="en">
            ES
          </option>
        </select>
      </div>
      <div
        onClick={handleDarkMode}
        className={`text-3xl flex items-center cursor-pointer transition-all  ${
          isDarkMode ? "rotate-180 text-red-600 hover:text-white hover:rotate-0" : "rotate-0 text-white hover:text-red-600 hover:rotate-180"}`}
      >
        <i className="bx bxs-adjust-alt"></i>
      </div>
    </section>
  );
};
export default MenuDarkLanguage;
