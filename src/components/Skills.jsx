const Skills = () => {
  return (
    <section className="min-h-screen border-b border-slate-700 flex justify-center items-center w-full">
      <article className="w-full grid place-items-center relative">
        <div className="rounded-full overflow-hidden w-[min(60%,250px)] grid place-items-center absolute">
          <img src="/Profile2.jpg" alt="" />
        </div>
        <section className="rounded-full w-[min(90%,380px)] aspect-square relative text-emerald-600">
          <div className="h-full aspect-square absolute  animate-[spin_linear_20s_infinite]">
            <div className="absolute left-1/2 -translate-x-1/2 origin-[50%_min(270%,199px)] ">
              <i className="bx bxl-html5 text-[min(15vw,68px)]"></i>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rotate-[60deg] origin-[50%_min(270%,199px)] ">
              <i className="bx bxl-css3 text-[min(15vw,68px)]"></i>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rotate-[120deg] origin-[50%_min(270%,199px)] ">
              <i className="bx bxl-javascript text-[min(15vw,68px)]"></i>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rotate-[180deg] origin-[50%_min(270%,199px)] ">
              <i className="bx bxl-react text-[min(15vw,68px)]"></i>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rotate-[240deg] origin-[50%_min(270%,199px)] ">
              <i className="bx bxl-tailwind-css text-[min(15vw,68px)]"></i>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rotate-[300deg] origin-[50%_min(270%,199px)] ">
              <i className="bx bxl-nodejs text-[min(15vw,68px)]"></i>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};
export default Skills;
