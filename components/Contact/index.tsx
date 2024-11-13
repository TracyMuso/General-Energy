import ContactForm from "./contactForm";

const Contact = () => {
  return (
<div id="contact" className="w-full flex flex-col items-center gap-9 py-6">
  <div className="flex md:flex-row flex-col items-center m-0 gap-10 lg:px-20 md:px-10 w-full">
    <div className="md:w-1/2 flex md:flex-col flex-row justify-between items-center gap-9">
      <div className="hidden md:flex flex-col items-center gap-5">
        <h3 className="lg:text-3xl sm:text-2xl text-center font-bold text-blue-300">Discutons</h3>
        <p className="xl:text-xl md:text-base sm:text-m text-center w-4/5">Veuillez nous contacter. Nous reviendrons vers vous dès que possible ! <br />
        Ou<br /> Visitez notre bureau</p>
      </div>
      <div className="mx-auto flex flex-col items-center">
        <strong className="sm:text-xl text-center text-m pb-3 text-blue-800">Notre bureau à Haut-Katanga</strong>
        <span className="lg:text-[17px] sm:text-m text-center text-sm">14, route Kipushi, Lubumbashi RD Congo</span>
        <span className="lg:text-[17px] sm:text-m text-center text-sm">+243 808 348 094</span>
        <span className="lg:text-[17px] sm:text-m text-center text-sm">info@generalenergy.cd</span>
        <span className="lg:text-[17px] sm:text-m text-center text-sm">
        Ouvert de 8h à 19h
      </span>
      </div>
    </div>
  <ContactForm />
  </div>
</div>
  )
}

export default Contact;
