export default async function page() {
  return (
    <div className="xz-contant-wrapper py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-center text-2xl md:text-4xl font-semibold mb-2">
            Contact US
          </h1>
          <span className="text-center">
            Please use the below form. You can also call customer service on +1
            (973) 435-3638.
          </span>
        </div>
        <div className="dragon-map w-full mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28886.604553505065!2d55.412628!3d25.175367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f614952f915f9%3A0xc406c97713611a9!2sDragon%20Mart%20by%20Dubai%20Retail!5e0!3m2!1sen!2sbd!4v1768471762146!5m2!1sen!2sbd"
            width={"100%"}
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-form">
          <div className="contact-header mb-5">
            <p>
              Please submit all general enquiries in the contact form below and
              we look forward to hearing from you soon.
            </p>
          </div>
          <form action="">
            <div className="inner-form flex flex-col gap-5 mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <button type="submit" className="contact-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
