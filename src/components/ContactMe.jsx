const ContactMe = () => {
  return <main className="min-h-screen bg-green-400 w-full flex justify-center items-center p-3">
    <section className="bg-fuchsia-600 w-full flex justify-center items-center">
      <form>
        <div>
        <label htmlFor="name">NAME</label>
        <input type="text" id="name" name="name"/>
        </div>
        <div>
        <label htmlFor="email">NAME</label>
        <input type="email" id="email" name="email"/>
        </div>
        <div>
          <textarea className="resize-none" name="msg" id="msg" cols="30" rows="10"></textarea>
        </div>
      </form>
    </section>
    
  </main>;
};
export default ContactMe;
