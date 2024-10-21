const Contact = () => {
  return (
    <div id="contact" className="w-full flex flex-col items-center gap-9 py-6">
      <div className="flex items-center m-0 gap-10 px-20 w-full">
        <div className="w-1/2 flex flex-col items-center gap-9">
          <h3 className="text-3xl font-bold text-blue-300">Lets Chat</h3>
          <p className="text-xl text-center">Please reach out to us. We will get back to you as soon as we can! <br />Or visit our office</p>
          <div className="mx-auto flex flex-col items-center">
            <strong className="text-xl pb-3 text-blue-800">Our office in Haut-Katanga</strong>
            <span>14, rout Kipushi, Lubumbashi RD Congo</span>
            <span>+243 808 348 094</span>
            <span>info@generalenergy.cd</span>
            <span>
            Open from 8am to 7pm
          </span>
          </div>
        </div>
      <form className="rounded-md border border-blue-500 text-blue-800 pt-5 pb-7 px-6 w-1/2" action="https://api.web3forms.com/submit" method="POST">
      <p className="text-center py-2 w-full font-bold">Please fill in all the fields</p>
        <input type="hidden" name="access_key" value="3355fb2e-9534-412a-8ebc-0f78147d3b1f" />
        <input type="hidden" name="subject" value="New Contact form Submission from Web3forms" />
        <input type="hidden" name="from_name" value="GE Contact" />

        <div className="grid gap-4 py-2 pt-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2">Name</label>
            <input id="name" name="name" className="px-4 py-2 border border-blue-200 w-full rounded-md leading-5 text-m" placeholder="Your name" type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">Email</label>
            <input id="email" name="email" className="px-4 py-2 border border-blue-200 w-full rounded-md leading-5 text-m" placeholder="Your email" type="email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2">Phone</label>
            <input id="phone" name="phone" className="px-4 py-2 border border-blue-200 w-full rounded-md leading-5 text-m" placeholder="+1 (234) 56789" type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2e">Message</label>
            <textarea className="px-4 py-2 border border-blue-200 w-full rounded-md leading-5 text-m" id="message" name="message" placeholder="Your message"></textarea>
          </div>
        </div>
        <div className="pl-4 py-2 relative">
        <label htmlFor="botcheck" className="py-2 text-blue-700">
          <input type="checkbox" name="botcheck" className="absolute left-0 bottom-[14px]" />
          I am not a robot
        </label>
        </div>
        <button className="w-full bg-yellow-400 text-blue-800 px-4 py-2 rounded-md" type="submit">Send Message</button>
      </form>
      </div>
    </div>
  )
}

export default Contact;
