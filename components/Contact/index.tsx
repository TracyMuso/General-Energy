import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <div id="contact" className="w-full flex flex-col items-center gap-9 py-6">
      <div className="flex md:flex-row flex-col items-center m-0 gap-10 lg:px-20 md:px-10 w-full">
        <div className="md:w-1/2 flex md:flex-col flex-row justify-between items-center gap-9">
          <div className="hidden md:flex flex-col items-center gap-5">
            <h3 className="lg:text-3xl sm:text-2xl text-center font-bold text-blue-300">Lets Chat</h3>
            <p className="lg:text-xl sm:text-m text-center w-4/5 md:w-full">Please reach out to us. We will get back to you as soon as we can! <br />
            Or visit our office</p>
          </div>
          <div className="mx-auto flex flex-col items-center">
            <strong className="sm:text-xl text-center text-m pb-3 text-blue-800">Our office in Haut-Katanga</strong>
            <span className="lg:text-[17px] sm:text-m text-center text-sm">14, rout Kipushi, Lubumbashi RD Congo</span>
            <span className="lg:text-[17px] sm:text-m text-center text-sm">+243 808 348 094</span>
            <span className="lg:text-[17px] sm:text-m text-center text-sm">info@generalenergy.cd</span>
            <span className="lg:text-[17px] sm:text-m text-center text-sm">
            Open from 8am to 7pm
          </span>
          </div>
        </div>
      <ContactForm />
      </div>
    </div>
  )
}

export default Contact;
