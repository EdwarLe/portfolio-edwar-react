const Home = ({handleCloseContactForm}) => {
  return (
    <main className="border-b border-b-slate-700 w-full min-h-screen p-3 flex justify-center">
        <section className="flex flex-col gap-4 justify-center">
            <article className="flex flex-col gap-6 mt-12">
                <h1 className="text-3xl font-bold">The best way to create a web site.</h1>
                <p>I am a web developer from Bogotá, Colombia. I enjoy building everything from small business sites to rich interactive web apps. If you are an employer looking to hire, you can get in touch whit me bellow.</p>
            </article>
            <section className="flex gap-6">
                <button className="bg-emerald-600 text-slate-950 font-semibold p-2 px-4">Projects</button>
                <button onClick={handleCloseContactForm} className="bg-emerald-600 text-slate-950 font-semibold p-2 px-4">Contact</button>
            </section>
        </section>
    </main>
  )
}
export default Home