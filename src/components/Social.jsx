const Social = () => {
  return (
    <article className="text-3xl flex flex-col gap-2 relative">
      <div className=" absolute w-20 h-10 rounded-full animate-ping -translate-x-8 hover:animate-none top-0 dark:bg-red-600 bg-slate-950"></div>
      <a
        href="https://www.linkedin.com/in/edwar-leon-54093964/"
        target="_blank"
        className="w-20 transition-all bg-slate-950 flex justify-end -translate-x-8 rounded-r-full  hover:translate-x-0 hover:bg-green-600 group p-1 px-2 dark:bg-red-600"
      >
        <i className="bx bxl-linkedin-square text-white group-hover:text-slate-950"></i>
      </a>
      <div className=" absolute w-20 h-10 rounded-full animate-ping -translate-x-8 hover:animate-none bottom-0 dark:bg-red-600 bg-slate-950"></div>
      <a
        href="https://github.com/EdwarLe"
        target="_blank"
        className="w-20 transition-all bg-slate-950 flex justify-end -translate-x-8 rounded-r-full  hover:translate-x-0 p-1 px-2 dark:bg-red-600 group hover:bg-green-600"
      >
        <i className="bx bxl-github text-white group-hover:text-slate-950"></i>
      </a>
    </article>
  );
};
export default Social;
