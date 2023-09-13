const Skills = () => {
  return (
    <section className="min-h-screen border-b border-slate-700 flex flex-col justify-center items-center w-full gap-14">
      <h2 className="text-3xl">TECHNOLOGIES</h2>
      <article className="w-full grid place-items-center relative">
        <div className="rounded-full overflow-hidden w-[min(55%,220px)] grid place-items-center absolute">
          <img src="/Profile2.jpg" alt="" />
        </div>
        <section className=" w-[min(95%,380px)] aspect-square relative text-green-600 dark:text-red-600 transition-colors">
          <div className="h-full rounded-full aspect-square absolute animate-[spin_linear_infinite_20s]">
            <div className="absolute left-1/2 -translate-x-1/2 origin-[50%_min(300%,220px)] h-1/6 aspect-square">
              <i className="bx bxl-html5 text-[min(15vw,_68px)]"></i>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rotate-[60deg] origin-[50%_min(300%,220px)] h-1/6 aspect-square">
              <i className="bx bxl-css3 text-[min(15vw,_68px)]"></i>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rotate-[120deg] origin-[50%_min(300%,220px)] h-1/6 aspect-square">
              <i className="bx bxl-javascript text-[min(15vw,_68px)]"></i>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rotate-[180deg] origin-[50%_min(300%,220px)] h-1/6 aspect-square">
              <i className="bx bxl-react text-[min(15vw,_68px)]"></i>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rotate-[240deg] origin-[50%_min(300%,220px)] h-1/6 aspect-square">
              <i className="bx bxl-tailwind-css text-[min(15vw,_68px)]"></i>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rotate-[300deg] origin-[50%_min(300%,220px)] h-1/6 aspect-square flex justify-center items-center">
              <i className="bx bxl-nodejs text-[min(15vw,_68px)]"></i>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};
export default Skills;
