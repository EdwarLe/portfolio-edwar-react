const Social = () => {
  return (
    <article className="text-3xl flex flex-col gap-2">
      <a
        href="https://www.linkedin.com/in/edwar-leon-54093964/"
        target="_blank"
        className="w-20 transition-all  bg-purple-600 flex justify-end -translate-x-8 rounded-r-full hover:translate-x-0 p-1 px-2 dark:bg-red-600 animate-pulse hover:animate-none"
      >
        <i className="bx bxl-linkedin-square"></i>
      </a>
      <a
        href="https://github.com/EdwarLe"
        target="_blank"
        className="w-20 transition-all  bg-green-600 flex justify-end -translate-x-8 rounded-r-full hover:translate-x-0 p-1 px-2 dark:bg-red-600 animate-pulse hover:animate-none"
      >
        <i className="bx bxl-github"></i>
      </a>
    </article>
  );
};
export default Social;
