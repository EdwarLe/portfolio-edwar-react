import emailjs from "@emailjs/browser";

const ContactMe = ({ handleCloseContactForm, isContactModal, t }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ad3gfu8",
        "template_m2xilte",
        e.target,
        "fGAZCD9UseDeWHUh8"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main
      className={`min-h-screen backdrop-blur-3xl w-full flex justify-center items-center p-3 fixed top-0 right-0 pt-36 min-[500px]:pt-24 ${
        isContactModal ? "scale-100" : "scale-0"
      } transition-transform z-20`}
    >
      <section className="bg-slate-700 dark:bg-zinc-900 w-[min(100%,_700px)] flex justify-center flex-col items-center gap-2 p-4 relative">
        <span className="absolute top-2 right-2" onClick={handleCloseContactForm}>
          <i className="bx bx-x hover:rotate-180 cursor-pointer text-3xl transition-all hover:bg-zinc-900 bg-green-600 dark:bg-red-600 rounded-full w-9 aspect-square text-center"></i>
        </span>
        <h2>{t("eng.titleContact")}</h2>
        <form
          onSubmit={sendEmail}
          className="grid place-items-center gap-4 w-full"
        >
          <div className="flex flex-col justify-center items-center w-[min(100%,_400px)]">
            <label htmlFor="name">{t("eng.name")}</label>
            <input
              className="text-black outline-none  p-1 px-2 w-full"
              type="text"
              id="name"
              name="user_name"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col justify-center items-center w-[min(100%,_400px)]">
            <label htmlFor="email" name="user_mail">
              {t("eng.mail")}
            </label>
            <input
              className="text-black outline-none p-1 px-2 w-full"
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col justify-center items-center w-[min(100%,_400px)]">
            <label htmlFor="message">{t("eng.message")}</label>
            <textarea
              className="resize-none text-black outline-none p-1 px-2 w-full"
              name="message"
              id="message"
              cols="20"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <input
              className="bg-green-600 px-4 hover:bg-zinc-900 dark:bg-red-600 hover:scale-105 cursor-pointer transition-all"
              type="submit"
              value={t("eng.btnSend")}
            />
          </div>
        </form>
      </section>
    </main>
  );
};
export default ContactMe;
