const Fotter = ({handleCloseContactForm}) => {
  return (
    <article className="bg-zinc-900 p-3 flex flex-col gap-4">
      <section>
        <h3>ABOUT</h3>
        <article className="grid">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <p onClick={handleCloseContactForm} className="cursor-pointer">Contact</p>
        </article>
      </section>
      <section>
        <h3>DEVELOPED BY</h3>
        <h5>Edwar León Maldonado</h5>
      </section>
      <section className="bg-yellow-700">
        <h3>SOCIAL</h3>
        <a>LinkedIn</a>
        <a>GitHub</a>
        <a>Instagram</a>
      </section>
    </article>
  );
};
export default Fotter;
