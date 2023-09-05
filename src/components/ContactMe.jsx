const ContactMe = ({handleCloseContactForm, isContactModal}) => {
  return (
    <main className={`min-h-screen backdrop-blur-3xl w-full flex justify-center items-center p-3 fixed top-0 right-0 mt-10 ${isContactModal ? 'scale-100' : 'scale-0'} transition-transform`}>
      <section className="bg-zinc-900 w-[min(100%,_700px)] flex justify-center flex-col items-center gap-2 p-4">
        <span className="self-end" onClick={handleCloseContactForm}><i className='bx bx-x hover:rotate-180 cursor-pointer text-3xl transition-all hover:bg-purple-600 rounded-full w-9 aspect-square text-center'></i></span>
        <form className="grid place-items-center gap-4 w-full">
          <div className="flex flex-col justify-center items-center w-[min(100%,_400px)]">
            <label htmlFor="name">NAME</label>
            <input className="text-black outline-none  p-1 px-2 w-full" type="text" id="name" name="name"/>
          </div>
          <div className="flex flex-col justify-center items-center w-[min(100%,_400px)]">
            <label htmlFor="email">E-MAIL</label>
            <input className="text-black outline-none p-1 px-2 w-full" type="email" id="email" name="email" />
          </div>
          <div className="flex flex-col justify-center items-center w-[min(100%,_400px)]">
            <label htmlFor="msg">MESSAGE</label>
            <textarea
              className="resize-none text-black outline-none p-1 px-2 w-full"
              name="msg"
              id="msg"
              cols="20"
              rows="5"
            ></textarea>
          </div>
        </form>
      </section>
    </main>
  );
};
export default ContactMe;
