const Home = () => {
  return (
    <main className="border-b border-b-slate-700 w-full min-h-screen p-3 flex justify-center">
        <section className="flex flex-col gap-4 justify-center">
            <article className="flex flex-col gap-6 mt-12">
                <h1 className="text-3xl font-bold">The best way to create a web site.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit exercitationem enim nostrum facilis quo. Saepe nihil molestias repellendus, totam minus dicta veritatis tempora et facere pariatur temporibus! Perspiciatis eius, ullam sequi et repellat itaque aliquid dolorum mollitia ex laboriosam iure eos tempore explicabo! Dignissimos voluptates porro ea modi esse consequuntur!</p>
            </article>
            <section className="flex gap-6">
                <button className="bg-emerald-600 text-slate-950 font-semibold p-2 px-4">Projects</button>
                <button className="bg-emerald-600 text-slate-950 font-semibold p-2 px-4">Contact</button>
            </section>
        </section>
    </main>
  )
}
export default Home