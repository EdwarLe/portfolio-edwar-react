const Fotter = ({ handleCloseContactForm }) => {
  return (
    <article className="bg-zinc-900 p-3 flex flex-col gap-4">
      <section>
        <h3 className="font-semibold">ABOUT</h3>
        <article className="grid">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <p onClick={handleCloseContactForm} className="cursor-pointer">
            Contact
          </p>
        </article>
      </section>
      <section>
        <h3 className="font-semibold">DEVELOPED BY</h3>
        <h5>Edwar León Maldonado</h5>
      </section>
      <section className="font-semibold grid gap-2">
        <h3>SOCIAL</h3>
        <div className="flex gap-4 text-3xl">
          <a>
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a>
            <i className="bx bxl-github"></i>
          </a>
          <a>
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </div>
      </section>
    </article>
  );
};
export default Fotter;
