const WhatsAppBtn = () => {
  return (
    <article className="fixed bottom-16 right-4 z-50 text-5xl bg-green-600 rounded-full h-14 aspect-square flex justify-center items-center cursor-pointer">
        <a href="https://wa.me/+573212159041" target="_blank" className=" absolute z-20">
        <i className='bx bxl-whatsapp text-white'></i></a>
        <section className="h-full w-full absolute">
            <div className="bg-green-600 h-full w-full rounded-full absolute animate-ping"></div>
        </section>
    </article>
  )
}
export default WhatsAppBtn