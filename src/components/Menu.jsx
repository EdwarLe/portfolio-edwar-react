const Menu = ({menuSlider}) => {
  return (
    <section
        className={` backdrop-blur-xl fixed min-h-[calc(100vh_-_88px)] bottom-0 transition-all w-full ${
          menuSlider ? "left-0" : "-translate-x-full z-10"
        }`}
      >
        <ul className="grid grid-cols-3">
          <li>Home</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </section>
  )
}
export default Menu