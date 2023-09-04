const ProjectUnit = ({title, img, gitHub, demo, skill1, skill2, skill3, skill4, skill5, skill6}) => {
  return (
    <article className="bg-zinc-900 grid place-items-center gap-4 p-2">
        <h3 className="uppercase font-semibold">{title}</h3>
        <div className={`h-56 ${img} bg-cover w-11/12 bg-[center_bottom] border-2 border-green-600`}>
          {/* <img className="object-top" src={img} alt="" /> */}
          <section className="flex gap-2 justify-center items-end h-full">
            <a className="bg-green-600 px-4 mb-6 shadow-xl shadow-slate-950 hover:scale-105 hover:bg-purple-600 transition-all" href={gitHub} target="_blank">GITHUB</a>
            <a className="bg-purple-600 px-4 mb-6 shadow-xl shadow-slate-950 hover:scale-105 hover:bg-green-600 transition-transform" href={demo} target="_blank">DEMO</a>
          </section>
        </div>
        <section className=" text-3xl flex flex-wrap gap-2 justify-center items-center w-11/12">
            <div>
                {skill1}
            </div>
            <div>
                {skill2}
            </div>
            <div>
                {skill3}
            </div>
            <div>
                {skill4}
            </div>
            <div>
                {skill5}
            </div>
            <div>
                {skill6}
            </div>
        </section>
      </article>
  )
}
export default ProjectUnit