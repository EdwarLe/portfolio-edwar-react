const Fotter = () => {
  return (
    <article className="bg-pink-600 p-3 flex flex-col gap-4">
      <section className="bg-slate-500">
        <h3>ABOUT</h3>
        <article>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#">Contact</a>
        </article>
      </section>
      <section className="bg-green-800">
        <h3>DEVELOPED BY</h3>
        <h5>Edwar León Maldonado</h5>
      </section>
      <section className="bg-yellow-700">
        <h3>SOCIAL</h3>
        <div>LinkedIn</div>
        <div>GitHub</div>
        <div>Instagram</div>
      </section>
    </article>
  );
};
export default Fotter;
