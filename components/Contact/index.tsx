const Contact = () => {
  return (
    <section className="w-full flex flex-col items-center gap-9 py-20">
      <div className="mx-auto">
        <h2 className="text-5xl font-bold">Get in Touch</h2>
      </div>
      <div className="flex items-center m-0 gap-10 px-20 w-full">

      <form className="rounded-md bg-brown-200 pt-5 pb-7 px-6 w-1/2" action="https://api.web3forms.com/submit" method="POST">

        <input type="hidden" name="access_key" value="3355fb2e-9534-412a-8ebc-0f78147d3b1f" />
        <input type="hidden" name="subject" value="New Contact form Submission from Web3forms" />
        <input type="hidden" name="from_name" value="GE Contact" />

        <div className="grid gap-4 py-2 pt-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-white">Name</label>
            <input id="name" name="name" className="px-4 py-2 border border-brown-200 w-full rounded-md leading-5 text-m" placeholder="Your name" type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-white">Email</label>
            <input id="email" name="email" className="px-4 py-2 border border-brown-200 w-full rounded-md leading-5 text-m" placeholder="Your email" type="email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 text-white">Phone</label>
            <input id="phone" name="phone" className="px-4 py-2 border border-brown-200 w-full rounded-md leading-5 text-m" placeholder="+1 (234) 56789" type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-white">Message</label>
            <textarea className="px-4 py-2 border border-brown-200 w-full rounded-md leading-5 text-m" id="message" name="message" placeholder="Your message"></textarea>
          </div>
        </div>
        <div className="ml-2 py-2">
        <label htmlFor="botcheck" className="py-2">
          <input type="checkbox" name="botcheck" className="" />
          I am not a robot
        </label>
        </div>
        <button className="w-full bg-yellow-400 text-white px-4 py-2 rounded-md" type="submit">Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact;
