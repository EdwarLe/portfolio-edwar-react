const MenuDarkLanguage = ({handleDarkMode}) => {
  return (
    <section className="flex items-center justify-between w-full gap-8">
        <div onClick={handleDarkMode} className="text-3xl flex items-center cursor-pointer hover:rotate-180 transition-transform">
          <i className="bx bxs-adjust-alt"></i>
        </div>
        <div className="bg-black/20 p-2 rounded-md">
          <span>Language: </span>
          <select className="bg-transparent outline-none" name="lng" id="lng">
            <option className="bg-black/60" value="es">ES</option>
            <option className="bg-black/60" value="en">EN</option>
          </select>
        </div>
      </section>
  )
}
export default MenuDarkLanguage